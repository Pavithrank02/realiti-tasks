import React from 'react'
import { Link } from 'react-router-dom';
import { MdDateRange, MdMap, MdPeople } from "react-icons/md";



const EventCard = ({ event }) => {
  const formatDate = (dateString) => new Date(dateString).toDateString();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{event.title}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
            {event.category}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MdDateRange className="w-4 h-4 mr-2 text-[#f19a1f]" />
            <span className="text-base">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MdMap className="w-4 h-4 mr-2 text-[#f19a1f]" />
            <span className="text-base">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MdPeople className="w-4 h-4 mr-2 text-[#f19a1f]" />
            <span className="text-base">{event.availableSeats} seats available</span>
          </div>
        </div>
        <Link to={`/event/${event.id}`}>
          <button
            className="w-full bg-[#f19a1f] font-semibold text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 "
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard