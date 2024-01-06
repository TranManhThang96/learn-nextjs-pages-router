import React from 'react';
import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/Events/EventList';
import EventSearch from '@/components/Events/EventSearch';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />;
    </>
  );
};

export default EventsPage;
