import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import { LoginInterface } from "../../../types";

export default NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      //@ts-ignore
      async authorize(credentials: LoginInterface ) {
        let client;
        try {
          client = await connectToDatabase();
        } catch(err) {
          throw new Error("Couldn't connect to database");
        }
        
        const db =  client.db('myblog');
        const user = await db.collection('users').findOne({username: credentials.username});

        if(!user) {
          throw new Error('Incorrect username or password');
        }

        const { password: userPassword } = user
        const isValid = await verifyPassword(credentials.password, userPassword);

        if(!isValid) {
          throw new Error('Incorrect username or password')
        }

        return {
          username: credentials.username
        };
      }
    })
  ]
});