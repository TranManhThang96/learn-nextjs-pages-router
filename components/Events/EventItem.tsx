import Image from 'next/image';
import React from 'react';
import classes from './event-item.module.css';
import Button from '../UI/Button';
import ArrowRightIcon from '@/public/images/icons/arrow-right-icon';
import AddressIcon from '@/public/images/icons/address-icon';
import DateIcon from '@/public/images/icons/date-icon';

export interface IEventItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const EventItem = (props: IEventItemProps) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={300} height={200} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}>Explore Event</Link> */}
          <Button href={exploreLink}>
            Explore Event{' '}
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
