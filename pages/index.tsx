import { GetServerSideProps, GetStaticProps } from "next";

import MeetupList from "../components/meetups/MeetupList";

import { Meetup } from "../types";

const MEETUPS: Meetup[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Zesp%C3%B3%C5%82_Zamku_Krzy%C5%BCackiego_MALBORK_01.jpg",
    address: "Zamek w Malborku",
    description: `
      Zamek w Malborku (niem. Ordensburg Marienburg) - zamek w Malborku,
      na prawym brzegu Nogatu, wzniesiony w kilku etapach od 1280 do poł.
      XV w. przez zakon krzyżacki.`,
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Royal_Castle%2C_Wawel_Hill%2C_4_Wawel%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg/1920px-Royal_Castle%2C_Wawel_Hill%2C_4_Wawel%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg",
    address: "Zamek Królewski na Wawelu",
    description: `
    Zamek Królewski na Wawelu - zamek obronno-rezydencyjny w Krakowie,
    na wzgórzu Wawelskim.`,
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/POL_Warsaw_Royal_Castle_2008_%283%29.JPG/1920px-POL_Warsaw_Royal_Castle_2008_%283%29.JPG",
    address: "Zamek Królewski na Warszawie",
    description: `
    Zamek Królewski w Warszawie - barokowo-klasycystyczny zamek królewski
    znajdujący się w Warszawie przy placu Zamkowym 4. Pełni funkcje muzealne
    i reprezentacyjne.`,
  },
];

const HomePage: React.FC<{ meetups: Meetup[] }> = (props) => {
  /*const [meetups, setMeetups] = useState<Meetup[]>([]);
  useEffect(() => {
    setMeetups(MEETUPS); // gets set in 2nd render cycle :(
  }, []);*/
  return <MeetupList meetups={props.meetups} />;
};

/*export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  return {
    props: {
      meetups: MEETUPS, // if data changes, we have rebuild + redeploy app
    },
    revalidate: 10 // regenerate this page every 10s
                   // new request will override outdated pages
  };
};*/

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  return {
    props: {
      meetups: MEETUPS, // gets regenerated at every request
    },
  };
};

export default HomePage;
