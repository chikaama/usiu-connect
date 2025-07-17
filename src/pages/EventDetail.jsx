import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { EventsContext } from '../context/EventsContext';

import { RSVPContext } from '../context/RSVPContext';
import RSVPButton from '../components/RSVPButton';

export default function EventDetail() {
    const { id } = useParams();
    const eventId = parseInt(id);
    const { events } = useContext(EventsContext);
    const event = events.find(e => e.id === eventId);


    const { rsvps, addRSVP } = useContext(RSVPContext);

    const isRSVPed = rsvps.includes(eventId);

    const handleRSVP = () => {
        if (!isRSVPed) {
            addRSVP(eventId);
            alert('RSVP Confirmed!');
        }
    };

    if (!event) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Event Not Found</h2>
                <Link to="/" className="text-blue-600 underline">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-96 object-cover rounded mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {event.location}</p>
            <p className="text-lg mt-4">{event.description}</p>

            <div className="mt-6">
                <RSVPButton isRSVPed={isRSVPed} onRSVP={handleRSVP} />
            </div>

            <Link
                to="/"
                className="inline-block mt-6 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
                Back to Home
            </Link>
        </div>
    );
}
