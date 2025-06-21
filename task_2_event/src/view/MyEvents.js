import React, { useEffect, useState } from 'react'

const MyEvents = () => {
  const formatDate = (dateString) => new Date(dateString).toDateString();
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("registeredEvents")) || []
    setRegisteredEvents(events)
  })
  return (
    <div className="max-w-6xl mx-auto">
      {/* <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Events
      </button> */}

      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Registered Events</h1>

      {registeredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">You haven't registered for any events yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registeredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    Registered
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
                </div>

                <button
                  // onClick={() => onCancelBooking(event.id)}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEvents