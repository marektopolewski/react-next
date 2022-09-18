import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  const onShowDetailsHandler = () => {
    router.replace(`${props.id}`)
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <picture>
            <source srcSet={props.image} type='image/jpeg' />
            <img src={props.image} alt={props.title} />
          </picture>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={onShowDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
