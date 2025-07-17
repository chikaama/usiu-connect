import { createContext, useState } from 'react';
import { mockUserRSVPs } from '../api/events';

export const RSVPContext = createContext();

export function RSVPProvider({ children }) {
  const [rsvps, setRsvps] = useState(mockUserRSVPs);

  const addRSVP = (eventId) => {
    if (!rsvps.includes(eventId)) {
      setRsvps([...rsvps, eventId]);
    }
  };

  return (
    <RSVPContext.Provider value={{ rsvps, addRSVP }}>
      {children}
    </RSVPContext.Provider>
  );
}
