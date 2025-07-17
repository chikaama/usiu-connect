import { createContext, useState } from 'react';
import { mockEvents } from '../api/events';

export const EventsContext = createContext();

export function EventsProvider({ children }) {
  const [events, setEvents] = useState(mockEvents);

  const addEvent = (newEvent) => {
    const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    setEvents([...events, { ...newEvent, id: newId }]);
  };

  const editEvent = (updatedEvent) => {
    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}
