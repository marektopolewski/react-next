import { NextApiHandler } from "next";

import { MongoClient, ObjectId } from "mongodb";
import { Meetup } from "../../types";

// this is secure because it never ends up on the client
const usr = process.env.MONGODB_USR;
const psw = process.env.MONGODB_PSW;

export const fetchMeetup = async (id: string): Promise<Meetup | null> => {
  const client = await MongoClient.connect(
    `mongodb+srv://${usr}:${psw}@react-course.vovccvt.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.findOne({ _id: new ObjectId(id) });

  client.close();

  if (!data) return null;

  return {
    id: data._id.toString(),
    title: data.title,
    address: data.address,
    image: data.image,
    description: data.description,
  };
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { meetupId } = req.query;
    if (!meetupId || meetupId.length > 0)
      return res.status(400);
    const meetup = await fetchMeetup(meetupId[0]);
    if (!meetup) return res.status(404).send("Meetup not found");
    res.status(200).json(meetup);
  }
};

export default handler;
