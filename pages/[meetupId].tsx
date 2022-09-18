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

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail meetup={MEETUP} />
    </>
  );
};

export default MeetupDetails;
