import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { Meetup } from "../types";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetup: Meetup) => {
    try {
      const response = await fetch("/api/newmeetup", {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: { "Content-Type": "application/json" },
      });
      if (!response?.ok)
        throw new Error(
          `Could not add meetup, status=${response.status ?? "unknown"}`
        );
      const resJson = await response.json();
      console.log(resJson);
    } catch (error: any) {
      if (error instanceof Error) {
        alert((error as Error).message);
      } else {
        alert("Unknown error occurred :(");
        console.log(error);
      }
    }
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
