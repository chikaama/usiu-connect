import { useContext, useState } from 'react';
import { EventsContext } from '../context/EventsContext';
import EventList from '../components/EventList';

export default function Home() {
  const { events } = useContext(EventsContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Upcoming Campus Events
      </h1>

      <div className="max-w-lg mx-auto mb-8 px-4">
        <input
          type="text"
          placeholder="Search events by title, location, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded p-2 focus:outline-blue-500"
        />
      </div>

      {filteredEvents.length > 0 ? (
        <EventList events={filteredEvents} />
      ) : (
        <p className="text-center text-gray-600 p-6">
          No events match your search.
        </p>
      )}
    </div>
  );
}
