import { GetStaticProps } from "next";
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

const MeetupDetails: React.FC<{ meetup: Meetup }> = (props) => {
  return (
    <>
      <MeetupDetail meetup={props.meetup} />
    </>
  );
};

export default MeetupDetails;

export const getStaticPaths = async () => {
  return {
    fallback: false, // all paths are covered
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  return {
    props: { meetup: { ...MEETUP, id: params?.meetupId } },
    revalidate: 5,
  };
};
