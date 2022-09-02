import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect("mongodb+srv://markoni97:Markoni304097@cluster0.izyf28a.mongodb.net/?retryWrites=true&w=majority");
  return client;
}