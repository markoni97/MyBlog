import type { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';
import { UserInterface } from '../../../types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is working' });
  }

  if (req.method === 'POST') {
    let client;

    try {
      client = await connectToDatabase();
    } catch (err) {
      res.status(500).json('Failed connecting to database');
      return
    }

    const db = client.db('myblog');
    const { fullname, email, username, password }: UserInterface = req.body;

    if (
      (!fullname.trim() || !email.includes('@') || password.trim().length < 7,
      !username.trim())
    ) {
      return res.status(422).json({ message: 'Bad user input' });
    }

    const emailInUse = await db.collection('users').findOne({email: email});
    if(emailInUse) {
      res.status(409).json({message: 'Email already in use'});
      return;
    }

    const usernameInUse = await db.collection('users').findOne({username: username});
    if(usernameInUse) {
      res.status(409).json({message: 'Username already exists'});
    }

    const hashPass = await hashPassword(password);

    const user: UserInterface = {
      fullname,
      email,
      username,
      password: hashPass,
    };

    try {
      await db.collection('users').insertOne(user);
      res
        .status(201)
        .json({ message: 'Successfully created user', user: user });
    } catch (err) {
      res.status(500).json({ message: 'Failed to insert user into database' });
      client.close()
      return;
    }

    client.close();
  }
};

export default handler;
