import { NextApiHandler } from "next";
import { Meetup } from "../../types";

import { MongoClient } from "mongodb";

// this is secure because it never ends up on the client
const usr = process.env.MONGODB_USR;
const psw = process.env.MONGODB_PSW;

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const data: Meetup = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${usr}:${psw}@react-course.vovccvt.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const { insertedId } = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({
      message: "inserted",
      data,
      insertedId,
    });
  }
};

export default handler;
