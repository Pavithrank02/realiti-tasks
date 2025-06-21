import React, { useState } from 'react'
import eventData from '../data/events.json'
import EventCard from '../components/EventCard'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 5
  const totalPage = Math.ceil(eventData.length / eventsPerPage)
  const start = (currentPage - 1) * eventsPerPage;
  const end = currentPage * eventsPerPage;
  const currentEvents = eventData.slice(start, end);

  return (
    <div className='flex flex-col justify-center'>
      <h1>Upcoming Events</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentEvents.map((event) => {
          return (
            <EventCard key={event.id} event={event} />
          )
        })}
      </div>
      <div className="flex justify-center items-center mt-4 ">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='mr-2 ml-2'>
          Page {currentPage} of {totalPage}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home