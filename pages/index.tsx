import { GetServerSideProps, GetStaticProps } from "next";

import MeetupList from "../components/meetups/MeetupList";

import { Meetup } from "../types";
import { fetchMeetups } from "./api/meetups";

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
  const meetups = await fetchMeetups();
  return {
    props: {
      meetups: meetups, // gets regenerated at every request
    },
  };
};

export default HomePage;
