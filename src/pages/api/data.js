import fs from "fs/promises";
import path from "path";
import cloudinary from '../../lib/cloundinary';
import multer from "multer";
import { kv } from '@vercel/kv';

const DATA_FILE = path.join(process.cwd(), "data", "workData.json");

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
            const data = await fs.readFile(DATA_FILE, "utf-8");
            const works = JSON.parse(data).works;

            const activeWorks = works.filter(work => work.status === 'active');
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

            const newWork = {
                id: Date.now(),
                title,
                description,
                status,
                images: imageUrls,
            };

            let works = [];
            try {
                const data = await kv.get(DATA_FILE);
                works = JSON.parse(data).works || [];
            } catch (error) {
                works = [];
            }

            works.push(newWork);
            await kv.set(DATA_FILE, JSON.stringify({ works }, null, 2));

            res.status(201).json({ message: "Work added", work: newWork });
        } catch (error) {
            console.error("Error adding work:", error);
            res.status(500).json({ error: "Failed to add work" });
        }
    } 
    else    if(req.method === "PUT") {
        try {
            const { id, title, description, status ,deleteImages} = req.body;
            let works = [];
       
            const data = await kv.get(DATA_FILE);
            works = JSON.parse(data).works || [];
            
            const workIndex = works.findIndex((work) => work.id === parseInt(id));
            if (workIndex === -1) {
                return res.status(404).json({ error: "Work not found" });
            }

            console.log("Delete images received:", deleteImages);
            if (deleteImages && Array.isArray(deleteImages)) {

                const deletePromises = deleteImages.map(async (url) => {
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

                works[workIndex].images = works[workIndex].images.filter(
                    (imgUrl) => !deleteImages.includes(imgUrl)
                );
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
            works[workIndex].images.push(...newImageUrls);
        }
           

            works[workIndex].title = title;
            works[workIndex].description = description;
            works[workIndex].status = status;

            await kv.set(DATA_FILE, JSON.stringify({ works }, null, 2));
            
            res.status(200).json({ message: "Work updated", work: works[workIndex] });
        }

        catch (error) {
            console.error("Error updating work:", error);
            res.status(500).json({ error: "Failed to update work" });
        }
    }

    else if (req.method === "DELETE") {
        try {
            const { id } = req.query;
            const data = await kv.get(DATA_FILE);
            let works = JSON.parse(data).works || [];
            
            const imageUrlsToDelete = works
                .filter((work) => work.id === parseInt(id))
                .flatMap((work) => work.images);

            console.log("Image URLs to delete:", imageUrlsToDelete);

            const deletePromises = imageUrlsToDelete.map(async (url) => {
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
       
         
            works = works.filter((work) => work.id !== parseInt(id));

            // Save the updated works
            await kv.set(DATA_FILE, JSON.stringify({ works }, null, 2));

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