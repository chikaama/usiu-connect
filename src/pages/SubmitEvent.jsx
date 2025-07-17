import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventsContext } from '../context/EventsContext';

export default function SubmitEvent() {
  const { addEvent } = useContext(EventsContext);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !location || !description || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const newEvent = { title, date, location, description, image };
    addEvent(newEvent);
    alert('Event submitted!');

    setSubmitted(true);
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Submit New Event</h1>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6 text-center">
          ✅ Your event has been submitted!
        </div>
      )}

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
          Submit Event
        </button>
      </form>

      <div className="text-center mt-4">
        <Link to="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    </div>
  );
}
