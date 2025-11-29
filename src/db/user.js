import connectToDatabase from '../lib/mongodb';
import bcrypt from 'bcryptjs';

export async function login({ username, password }) {
  const db = await connectToDatabase();
  const users = db.collection('users');


    const findUser = await users.findOne({username});


    if (!findUser) {
        throw new Error('Invalid username');
    }
    
    const passwordMatch = bcrypt.compareSync(password, findUser.password);

    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

  
    return findUser;

}


export async function forgotPassword({ username, password }) {

    const db = await connectToDatabase();
    const users = db.collection('users');
    
    const findUser = await users.findOne({ username, });
    
    if (!findUser) {
        throw new Error('Invalid username');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const updateResult = await users.updateOne(
        { username },
        { $set: { password: hashedPassword } }
    );
    
    if (updateResult.modifiedCount === 0) {
        throw new Error('Password update failed');
    }
    return true;
}


    
    

