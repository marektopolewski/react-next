import { Meetup } from "../../types";

import classes from "./MeetupDetail.module.css";

const MeetupDetail: React.FC<{ meetup: Meetup }> = (props) => (
  <section className={classes.detail}>
    <img src={props.meetup.image} alt='Meetup Image Placeholder' />
    <h1>{props.meetup.title}</h1>
    <address>{props.meetup.address}</address>
    <p>{props.meetup.description}</p>
  </section>
);

export default MeetupDetail;
