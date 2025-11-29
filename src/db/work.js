import connectToDatabase from '../lib/mongodb';
const { ObjectId } = require("mongodb");

export async function getData() {
  const db = await connectToDatabase();
  const work = db.collection('workData');

    const data =  work.find()

    return data.toArray();
}




export async function createData({ title, description, status, images}) {
    const db = await connectToDatabase();
    const work = db.collection('workData');

    const newData = {
        title,
        description,
        status,
        images,
        createdAt: new Date(),
    };
    const insertResult = await work.insertOne(newData);
    
return {
    ...newData,  
    _id: insertResult.insertedId,  
};
}   


export async function updateData({ id, title, description, status, images }) {
    const db = await connectToDatabase();
    const work = db.collection('workData');
    

    console.log(images.length)
    const updateResult = await work.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, description, status, images } }
    );

    if (updateResult.modifiedCount === 0) {
        throw new Error('Data update failed');
    }
  
    return updateResult;
}


export async function deleteData({ id }) {
    const db = await connectToDatabase();
    const work = db.collection('workData');
    
    const deleteResult = await work.deleteOne({ _id: new ObjectId(id) });
    
    if (deleteResult.deletedCount === 0) {
        throw new Error('Data deletion failed');
    }
    return deleteResult;
}


export async function getDataById(id) {
    const db = await connectToDatabase();
    const work = db.collection('workData');
console.log('Getting data by id:', id);

  const data = await work.findOne({ _id: new ObjectId(id) });
    if (!data) {
        throw new Error('Data not found');
    }

    return data;
}
