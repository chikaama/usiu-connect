import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-1">{event.date} @ {event.location}</p>
        <p className="text-gray-700 flex-grow mb-4">{event.description}</p>
        <Link
          to={`/events/${event.id}`}
          className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
