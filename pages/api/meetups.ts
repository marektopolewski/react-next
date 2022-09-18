import { NextApiHandler } from "next";

import { MongoClient } from "mongodb";
import { Meetup } from "../../types";

// this is secure because it never ends up on the client
const usr = process.env.MONGODB_USR;
const psw = process.env.MONGODB_PSW;

export const fetchMeetups = async (): Promise<Meetup[]> => {
  const client = await MongoClient.connect(
    `mongodb+srv://${usr}:${psw}@react-course.vovccvt.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray();

  client.close();

  const meetups = data.map((meetup) => {
    return {
      id: meetup._id.toString(),
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
    };
  });

  return meetups;
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const meetups = await fetchMeetups();
    res.status(200).json(meetups);
  }
};

export default handler;
