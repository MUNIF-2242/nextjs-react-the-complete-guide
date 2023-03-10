import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/helpers/api-util';

function HomePage(props) {
  //console.log(props);
  return (
    <>
      <main>
        <h1>Show all featured Events</h1>

        <EventList items={props.events} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get events.
  // You can use any data fetching library
  const featuredEvents = await getFeaturedEvents();

  // By returning { props: { events } }, the HomaPage component
  // will receive `events` as a prop at build time
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
