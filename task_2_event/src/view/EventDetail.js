import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import eventData from '../data/events.json'
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDateRange, MdMap, MdPeople } from "react-icons/md";



const EventDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const formatDate = (dateString) => new Date(dateString).toDateString();

  useEffect(() => {
    const eventFound = eventData.find((e) => e.id === parseInt(id, 10))
    setEvent(eventFound)
  }, [id])
  // console.log(event)
  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("registeredEvents")) || [];
    setRegisteredEvents(events);
  }, []);


  const isEventBooked = registeredEvents.some(event => event.id === parseInt(id, 10));

  const handleBookNow = () => {
    if (!event || isEventBooked || event.availableSeats <= 0) {
      return;
    }

    const updatedRegisteredEvents = [
      ...registeredEvents,
      { ...event, availableSeats: event.availableSeats - 1 },
    ];
    localStorage.setItem("registeredEvents", JSON.stringify(updatedRegisteredEvents));
    setRegisteredEvents(updatedRegisteredEvents);

    setEvent({ ...event, availableSeats: event.availableSeats - 1 });


  }
  if (!event) return <p>Loading...</p>;
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#f19a1f] hover:text-orange-700 mb-6 font-medium"
      >
        <FaArrowLeftLong className="w-4 h-4 mr-2" />
        Back to Events
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
            <span className="px-4 py-2 bg-[#f19a1f] text-[#1E1E54] rounded-full font-medium">
              {event.category}
            </span>
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{event.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MdDateRange className="w-5 h-5 mr-3 text-[#f19a1f]" />
                <div>
                  <span className="font-medium">Date:</span>
                  <p className="text-gray-600">{formatDate(event.date)}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <MdMap className="w-5 h-5 mr-3 text-[#f19a1f]" />
                <div>
                  <span className="font-medium">Location:</span>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MdPeople className="w-5 h-5 mr-3 text-[#f19a1f]" />
                <div>
                  <span className="font-medium">Available Seats:</span>
                  <p className="text-gray-600">{event.availableSeats} remaining</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {isEventBooked ? (
              <button
                disabled
                className="bg-green-100 text-green-800 px-8 py-3 rounded-md font-bold cursor-not-allowed"
              >
                Already Booked
              </button>
            ) : event.availableSeats > 0 ? (
              <button
                onClick={handleBookNow}
                className="bg-[#f19a1f] text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors duration-200 font-bold"
              >
                Book Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-200 text-gray-400 px-8 py-3 rounded-md cursor-not-allowed font-bold"
              >
                Sold Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail