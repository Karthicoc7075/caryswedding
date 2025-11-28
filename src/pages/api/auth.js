const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
import { kv } from '@vercel/kv';

const AUTH_FILE = path.join(process.cwd(), "data", "auth.json"); 

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        if(!username && !password) {
         res.status(400).json({ error: 'Username and Password are required' });
         return;   
        }

        try {
            const authData = await kv.get(AUTH_FILE);
            const users = JSON.parse(authData).user;

            const findUser = users.find(u => u.username == username);


            if(!findUser) {
                res.status(401).json({ error: 'Invalid username' });
                return;
            }

            const passwordMatch = bcrypt.compareSync(password, findUser.password);
            
            if(!passwordMatch) {
                res.status(401).json({ error: 'Invalid password' });
                return;
            }

            const token = jsonwebtoken.sign(
                { username: findUser.username },
                process.env.JWT_SECRET,
                { expiresIn: process.env.SESSION_TIMEOUT || '1d' }
            );
            res.status(200).json({ token });
            
        } catch (error) {
            console.error('Error during authentication:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }   
    } else if(req.method === 'PUT') {
        const { username, token, password } = req.body;
        

        if(!username || !token || !password) {
            res.status(400).json({ error: 'Username, Token and New Password are required' });
            return;   
            }


            if(token !== process.env.ADMIN_RESET_TOKEN) {
                res.status(401).json({ error: 'Invalid token' });
                return;
            }



        try {
            
            const authData = await kv.get(AUTH_FILE);
            const users = JSON.parse(authData).user;

            const user = users.find(u => u.username === username)
            if(!user) {
                res.status(401).json({ error: 'Invalid username or token' });
                return;
            }



            const newUserData = {
                username: user.username,
                password: bcrypt.hashSync(password, 12)
            }
            
            const updatedUsers = users.map(u => u.username === username ? newUserData : u);

            await kv.set(AUTH_FILE, JSON.stringify({ user: updatedUsers }, null, 2));

            res.status(200).json({ message: 'Password updated successfully' });

        } catch (error) {
            console.error('Error during password reset:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
