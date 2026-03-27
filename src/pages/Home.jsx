import { useContext, useState, useEffect, useMemo } from 'react';
import { EventsContext } from '../context/EventsContext';
import EventList from '../components/EventList';

export default function Home() {
  const { events } = useContext(EventsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Add safety check for events array
  const safeEvents = events || [];

  // Debounce search term to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredEvents = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return safeEvents;
    }
    
    const searchLower = debouncedSearchTerm.toLowerCase();
    return safeEvents.filter((event) =>
      event.title?.toLowerCase().includes(searchLower) ||
      event.location?.toLowerCase().includes(searchLower) ||
      event.description?.toLowerCase().includes(searchLower)
    );
  }, [safeEvents, debouncedSearchTerm]);

  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold text-center my-8">
          Upcoming Campus Events
        </h1>
      </header>

      <div className="max-w-lg mx-auto mb-8 px-4">
        <label htmlFor="search-events" className="sr-only">
          Search events by title, location, or description
        </label>
        <input
          id="search-events"
          type="text"
          placeholder="Search events by title, location, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-describedby="search-help"
        />
        <div id="search-help" className="sr-only">
          Search results will appear below as you type
        </div>
      </div>

      <main>
        {filteredEvents.length > 0 ? (
          <EventList events={filteredEvents} />
        ) : (
          <div className="text-center text-gray-600 p-6" role="status" aria-live="polite">
            {searchTerm ? 'No events match your search.' : 'No events available.'}
          </div>
        )}
      </main>
    </div>
  );
}
