import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';
import { getAllEvents } from '@/styles/dummy-data';
import { useRouter } from 'next/router';
import React from 'react';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <h1>Show all Events</h1>;
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
