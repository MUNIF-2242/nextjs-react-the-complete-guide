import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import Comments from '@/components/input/comments';
import { getFeaturedEvents, getEventById } from '@/helpers/api-util';
import React from 'react';

function EventsDetailsPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  const event = props.selectedEvent;
  if (!event) {
    return <div className='center'>Loading... </div>;
  }
  return (
    <>
      <h1>EventsDetailsPage</h1>;
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
      <Comments eventId={event.id} />
    </>
  );
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    // Passed to the page component as props
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    //paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  };
}
export default EventsDetailsPage;
