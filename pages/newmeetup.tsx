import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { Meetup } from "../types";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetup: Meetup) => {
    console.log(meetup);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
