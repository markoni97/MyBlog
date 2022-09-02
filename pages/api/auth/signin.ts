import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/db";
import { LoginInterface } from "../../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "GET") {
    res.status(200).json({message: "This is working"})
  }

  if(req.method === "POST") {
    const { email, password }: LoginInterface = req.body;
    if(!email.includes("@") || password.trim().length < 7) {
      let client
      try {
        client = await connectToDatabase();
      } catch(err) {
        return res.status(500).json("Failed connecting to database");
      }
      

    }
  }

}

export default handler;
