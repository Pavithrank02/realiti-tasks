import React, { useState } from 'react';
import eventData from '../data/events.json';
import EventCard from '../components/EventCard';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const eventsPerPage = 5;

  // Filter events based on the search term
  const filteredEvents = eventData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPage = Math.ceil(filteredEvents.length / eventsPerPage);
  const start = (currentPage - 1) * eventsPerPage;
  const end = currentPage * eventsPerPage;
  const currentEvents = filteredEvents.slice(start, end);

  return (
    <div className="max-w-6xl mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search your required events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-orange-400 rounded shadow-sm"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEvents.length > 0 ? (
          currentEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-500 col-span-full">No events found.</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 font-semibold rounded disabled:opacity-50 hover:bg-[#f19a1f]"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2 font-extrabold">
          Page {currentPage} of {totalPage}
        </span>
        <button
          className="px-4 py-2 font-semibold bg-gray-300 rounded disabled:opacity-50 hover:bg-[#f19a1f]"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
