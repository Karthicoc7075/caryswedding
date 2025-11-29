import fs from "fs/promises";
import path from "path";
import cloudinary from '../../lib/cloundinary';

import multer from "multer";
import {getData,createData,updateData,deleteData, getDataById} from '../../db/work'

const upload = multer({ storage: multer.memoryStorage() });

export default async function handler(req, res) {
      await new Promise((resolve, reject) => {
        upload.array("images")(req, res, (err) => {
            if (err) reject(err);
            else resolve();
        });
    }); 

    if (req.method === "GET") {
        try {
            const {type} = req.query;

           console.log("Requested type:", type);
            const works = await getData();
            let activeWorks;
            
            if(type=="all") {
                activeWorks = works
                
            } else {
               activeWorks = works.filter(work => work.status === 'active');
            }

            res.status(200).json({ works: activeWorks });
        } catch (error) {
            console.error("Error reading data:", error);
            res.status(500).json({ error: "Failed to read data" });
        }
    } else if (req.method === "POST") {
        try {
            const { title, description, status } = req.body;
            const files = req.files;

            if (!files || files.length === 0) {
                return res.status(400).json({ error: "No images uploaded" });
            }

            const uploadPromises = files.map(
                (file) =>
                    new Promise((resolve, reject) => {
                        const uploadStream = cloudinary.uploader.upload_stream(
                            {
                                folder: "caryswedding",
                                public_id: `work_${Date.now()}_${file.originalname.split('.')[0]}`,
                                resource_type: "image",
                                unique_filename: true,
                            },
                            (error, result) => {
                                if (error) reject(error);
                                else resolve(result.secure_url);
                            }
                        );

                        uploadStream.end(file.buffer);
                    })
            );
 
            const imageUrls = await Promise.all(uploadPromises);

            const newWork = await createData({ title, description, status, images: imageUrls });

            res.status(201).json({ message: "Work added", work: newWork });
        } catch (error) {
            console.error("Error adding work:", error);
            res.status(500).json({ error: "Failed to add work" });
        }
    } 
    else    if(req.method === "PUT") {
        try {
            const { id, title, description, status ,deleteImages} = req.body;
           
       
            const findData = await getDataById(id);
  let imagesToDelete = [];
            console.log("Delete images received:", deleteImages);
            if (deleteImages) {
              
                if (Array.isArray(deleteImages)) {
                    imagesToDelete = deleteImages;     // already an array
                    } else {
        imagesToDelete = [deleteImages];   // make it an array
                }
                const deletePromises = imagesToDelete.map(async (url) => {
                    try {
                        const decodedUrl = decodeURIComponent(url);
                        const filename = decodedUrl.split('/').pop().split('.')[0];
                        const publicId = `caryswedding/${filename}`;
                        
                        const result = await cloudinary.uploader.destroy(publicId, {
                            resource_type: "image",
                            invalidate: true
                        });
                        
                        return result;
                    } catch (error) {
                        console.error(`Error deleting image ${url}:`, error);
                        return { result: 'error', error: error.message };
                    }
                });

                findData.images = findData.images.filter(img => !deleteImages.includes(img));

                const deleteResults = await Promise.all(deletePromises);
                console.log("Image delete results:", deleteResults);
            }


            if(req.files && req.files.length > 0) {
                const uploadPromises = req.files.map(
                    (file) =>
                        new Promise((resolve, reject) => {
                            const uploadStream = cloudinary.uploader.upload_stream(
                                {
                                    folder: "caryswedding",
                                    public_id: `work_${Date.now()}_${file.originalname.split('.')[0]}`,
                                    resource_type: "image",
                                    unique_filename: true,
                                },
                                (error, result) => {
                                    if (error) reject(error);
                                    else resolve(result.secure_url);
                                }
                            );
                            
                            uploadStream.end(file.buffer);
                        }
            )
            );

             const newImageUrls = await Promise.all(uploadPromises);
                findData.images.push(...newImageUrls);
        }
           

            findData.title = title;
            findData.description = description;
            findData.status = status;


            await updateData({ id, title: findData.title, description: findData.description, status: findData.status, images: findData.images });
            
            res.status(200).json({ message: "Work updated", work: findData });
        }

        catch (error) {
            console.error("Error updating work:", error);
            res.status(500).json({ error: "Failed to update work" });
        }
    }

    else if (req.method === "DELETE") {
        try {
            const { id } = req.query;
            
           const findData= await getDataById(id);

            const deletePromises = findData.images.map(async (url) => {
                try {
                    const decodedUrl = decodeURIComponent(url);
                    const filename = decodedUrl.split('/').pop().split('.')[0];
                    const publicId = `caryswedding/${filename}`;
                    
                    console.log("Deleting public_id:", publicId);
                    
                    const result = await cloudinary.uploader.destroy(publicId, {
                        resource_type: "image",
                        invalidate: true
                    });
                    
                    console.log(`Delete result for ${publicId}:`, result);
                    return result;
                } catch (error) {
                    console.error(`Error deleting image ${url}:`, error);
                    return { result: 'error', error: error.message };
                }
            });

            const deleteResults = await Promise.all(deletePromises);
            console.log("All delete results:", deleteResults);
       
         
            await deleteData({ id });

            res.status(200).json({ 
                message: "Work deleted", 
                cloudinaryResults: deleteResults 
            });
        } catch (error) {
            console.error("Error deleting work:", error);
            res.status(500).json({ error: "Failed to delete work" });
        }
    } else {
        res.setHeader("Allow", ["GET", "POST", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};