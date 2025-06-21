import React from 'react'

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
            {/* <Calendar className="w-4 h-4 mr-2" /> */}
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            {/* <MapPin className="w-4 h-4 mr-2" /> */}
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            {/* <Users className="w-4 h-4 mr-2" /> */}
            <span className="text-sm">{event.availableSeats} seats available</span>
          </div>
        </div>

        <button
          // onClick={() => onViewDetails(event.id)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard