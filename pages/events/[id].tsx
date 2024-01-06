import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';
import React from 'react';
import EventSummary from '@/components/Events/EventDetail/event-summary';
import EventContent from '@/components/Events/EventDetail/event-content';
import EventLogistics from '@/components/Events/EventDetail/event-logistics';
import LogisticsItem from '@/components/Events/EventDetail/logistics-item';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
