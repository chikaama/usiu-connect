import EventList from '../components/EventList';
import { useContext } from 'react';
import { EventsContext } from '../context/EventsContext';
import { RSVPContext } from '../context/RSVPContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { rsvps } = useContext(RSVPContext);

    const { events } = useContext(EventsContext);
    const rsvpEvents = events.filter(event =>

        rsvps.includes(event.id)
    );

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">
                My RSVPed Events
            </h1>
            {rsvpEvents.length > 0 ? (
                <EventList events={rsvpEvents} />
            ) : (
                <div className="text-center p-6">
                    <p className="mb-4 text-lg">You haven't RSVPed to any events yet.</p>
                    <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Browse Events
                    </Link>
                </div>
            )}
        </div>
    );
}
