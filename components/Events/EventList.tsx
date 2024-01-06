import React from 'react';
import EventItem, { IEventItemProps } from './EventItem';
import classes from './event-list.module.css';

const EventList = ({ items }: { items: IEventItemProps[] }) => {
  return (
    <ul className={classes.list}>
      {items.map((event: IEventItemProps) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
