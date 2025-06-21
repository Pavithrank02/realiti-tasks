import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import eventData from '../data/events.json'

const EventDetail = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const formatDate = (dateString) => new Date(dateString).toDateString();

  useEffect(() => {
    const event = eventData.find((e) => e.id === parseInt(id, 10))
    setEvent(event)
  })
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
            {event.category}
          </span>
        </div>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{event.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              {/* <Calendar className="w-5 h-5 mr-3 text-blue-600" /> */}
              <div>
                <span className="font-medium">Date:</span>
                <p className="text-gray-600">{formatDate(event.date)}</p>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              {/* <MapPin className="w-5 h-5 mr-3 text-blue-600" /> */}
              <div>
                <span className="font-medium">Location:</span>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              {/* <Users className="w-5 h-5 mr-3 text-blue-600" /> */}
              <div>
                <span className="font-medium">Available Seats:</span>
                <p className="text-gray-600">{event.availableSeats} remaining</p>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="flex justify-center">
          {isBooked ? (
            <button
              disabled
              className="bg-green-100 text-green-800 px-8 py-3 rounded-md font-medium cursor-not-allowed"
            >
              Already Booked
            </button>
          ) : event.availableSeats > 0 ? (
            <button
              onClick={() => onBook(event)}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Book Now
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-200 text-gray-400 px-8 py-3 rounded-md cursor-not-allowed font-medium"
            >
              Sold Out
            </button>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default EventDetail