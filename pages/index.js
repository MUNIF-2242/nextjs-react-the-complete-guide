import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/styles/dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <main>
        <h1>Show all featured Events</h1>

        <EventList items={featuredEvents} />
      </main>
    </>
  );
}

export default HomePage;
