import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext.js';
import { courseData } from "../MOCK_DATA";
import usePagination from '../hooks/usePagination.js';
import Pagination from './Pagination.jsx';

const CourseCard = () => {
  const { registered, registerCourse } = useContext(CourseContext);
  const itemsPerPage = 8;
  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(courseData, itemsPerPage);

  const isRegistered = (course) => {
    return registered.some((c) => c.id === course.id);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Available Courses
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentData.map((course) => (
          <div
            key={course.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col"
          >
            <div className="relative">
              <img
                src={course.images}
                alt={course.course_title}
                className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300"
              />
              <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                #{course.id}
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 p-5">
              <div className="mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {course.course_title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-2">
                  {course.description}
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-extrabold">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  if (!isRegistered(course)) {
                    registerCourse(course);
                  }
                }}
                className={`mt-auto text-white text-lg font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg ${isRegistered(course)
                  ? 'bg-green-500 cursor-not-allowed'
                  : 'bg-orange-400 hover:bg-orange-500'
                  }`}
              >
                {isRegistered(course) ? 'Registered' : 'Register Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
      />
    </div>
  );
};

export default CourseCard;
