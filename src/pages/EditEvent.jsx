import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { EventsContext } from '../context/EventsContext';

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const eventId = parseInt(id);
  const { events, editEvent } = useContext(EventsContext);
  const event = events.find(e => e.id === eventId);

  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.date || '');
  const [location, setLocation] = useState(event?.location || '');
  const [description, setDescription] = useState(event?.description || '');
  const [image, setImage] = useState(event?.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent({ id: eventId, title, date, location, description, image });
    alert('Event updated!');
    navigate('/admin');
  };

  if (!event) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-red-600">Event Not Found</h2>
        <Link to="/admin" className="text-blue-600 underline">Back to Admin</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">Event Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded p-2 focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded p-2 focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2 focus:outline-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded p-2 focus:outline-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>

      <div className="text-center mt-4">
        <Link to="/admin" className="text-blue-600 underline">Back to Admin</Link>
      </div>
    </div>
  );
}
