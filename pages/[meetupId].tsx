import { GetStaticProps } from "next";
import Head from "next/head";

import { fetchMeetup } from "./api/meetup";
import { fetchMeetups } from "./api/meetups";

import MeetupDetail from "../components/meetups/MeetupDetail";
import { Meetup } from "../types";

const MEETUP: Meetup = {
  id: "m1",
  title: "A First Meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Zesp%C3%B3%C5%82_Zamku_Krzy%C5%BCackiego_MALBORK_01.jpg",
  address: "Zamek w Malborku",
  description: `
    Zamek w Malborku (niem. Ordensburg Marienburg) - zamek w Malborku,
    na prawym brzegu Nogatu, wzniesiony w kilku etapach od 1280 do poł.
    XV w. przez zakon krzyżacki.`,
};

const MeetupDetails: React.FC<{ meetup: Meetup | null }> = (props) => {
  return (
    <>
      <Head>
        <title>Meetup Details: React + Next + Mongo</title>
        <meta name='description' content={`Meetup details: ${props.meetup?.title}`} />
        <meta charSet='utf=8' />
      </Head>
      {props.meetup && <MeetupDetail meetup={props.meetup} />}
    </>
  );
};

export default MeetupDetails;

export const getStaticPaths = async () => {
  const comments = await fetchMeetups();
  return {
    fallback: false, // all paths are covered
    paths: comments.map((comment) => {
      return { params: { meetupId: comment.id } };
    }),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  let meetup: Meetup | null = null;
  if (params && params.meetupId)
    meetup = await fetchMeetup(params.meetupId as string);
  return {
    props: { meetup },
    revalidate: 5,
  };
};
