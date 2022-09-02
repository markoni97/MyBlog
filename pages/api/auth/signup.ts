import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import { UserInterface } from "../../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({ message: "This is working" });
  }

  if (req.method === "POST") {
    const { fullname, email, username, password }: UserInterface = req.body;

    if (
      (!fullname.trim() || !email.includes("@") || password.trim().length < 7,
      !username.trim())
    ) {
      return res.status(422).json({ message: "Bad user input" });
    }

    const hashPass = await hashPassword(password);
    console.log(typeof hashPass, hashPass);

    const user = {
      fullname,
      email,
      username,
      password: hashPass,
    };

    let client;
    try {
      client = await connectToDatabase();
    } catch (err) {
      return res.status(500).json("Failed connecting to database");
    }

    const db = client.db("myblog");

    try {
      await db.collection("users").insertOne(user);
    } catch (err) {
      client.close();
      return res
        .status(500)
        .json({ message: "Failed to insert user into database" });
    }
    res.status(201).json({message: "Successfully created user"});
    client.close();
    
  }
};

export default handler;
