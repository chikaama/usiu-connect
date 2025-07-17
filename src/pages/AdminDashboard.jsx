import { useState } from 'react';
import { useContext } from 'react';
import { EventsContext } from '../context/EventsContext';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    const { events, deleteEvent } = useContext(EventsContext);


    const handleEdit = (eventId) => {
        alert(`Edit event ${eventId} (mock)`);
        // Later: navigate to Edit form with prefilled data
    };

    const handleDelete = (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setEvents(events.filter(e => e.id !== eventId));
            alert('Event deleted (mock)');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Admin Dashboard
            </h1>

            {events.length === 0 ? (
                <p className="text-center">No events found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded shadow">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-4 py-2 text-left">Title</th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Location</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{event.title}</td>
                                    <td className="px-4 py-2">{event.date}</td>
                                    <td className="px-4 py-2">{event.location}</td>
                                    <td className="px-4 py-2 text-center space-x-2">
                                        <Link
                                            to={`/admin/edit/${event.id}`}
                                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => {
                                                if (window.confirm('Are you sure you want to delete this event?')) {
                                                    deleteEvent(event.id);
                                                }
                                            }}

                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"

                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="text-center mt-6">
                <Link to="/" className="text-blue-600 underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
