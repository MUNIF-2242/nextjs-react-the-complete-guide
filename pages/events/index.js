import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/events-search';
import { getAllEvents } from '@/helpers/api-util';
//import { getAllEvents } from '@/styles/dummy-data';
import { useRouter } from 'next/router';
import React from 'react';

function AllEventsPage(props) {
  const { events } = props;
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

export async function getStaticProps() {
  // Call an external API endpoint to get events.
  // You can use any data fetching library
  const events = await getAllEvents();

  // By returning { props: { events } }, the HomaPage component
  // will receive `events` as a prop at build time
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
