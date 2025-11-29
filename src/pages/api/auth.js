const jsonwebtoken = require('jsonwebtoken');

import {login, forgotPassword} from '../../db/user'

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        if(!username && !password) {
         res.status(400).json({ error: 'Username and Password are required' });
         return;   
        }

        try {
            const findUser = await login({ username, password });

            const token = jsonwebtoken.sign(
                { username: findUser.username },
                process.env.JWT_SECRET,
                { expiresIn: process.env.SESSION_TIMEOUT || '1d' }
            );
            res.status(200).json({ token });
            
        } catch (error) {
            console.error('Error during authentication:', error);
            res.status(500).json({ error:error.message  });
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
            
            const authData = await forgotPassword({ username, password });
           

            res.status(200).json({ message: 'Password updated successfully' });

        } catch (error) {
          
            res.status(500).json({ error: 'Internal Server Error' });
        }
        
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
