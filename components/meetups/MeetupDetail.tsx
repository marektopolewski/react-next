import { Meetup } from "../../types";

import classes from "./MeetupDetail.module.css";

const MeetupDetail: React.FC<{ meetup: Meetup }> = (props) => (
  <section className={classes.detail}>
    <picture>
      <source srcSet={props.meetup.image} type='image/jpeg' />
      <img src={props.meetup.image} alt={props.meetup.title} />
    </picture>
    <h1>{props.meetup.title}</h1>
    <address>{props.meetup.address}</address>
    <p>{props.meetup.description}</p>
  </section>
);

export default MeetupDetail;
