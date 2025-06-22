import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

const MyCourses = () => {
  const { registered, removeCourse } = useContext(CourseContext);
  const itemsPerPage = 6;

  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(registered, itemsPerPage);
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Registered Courses</h1>
        {registered.length === 0 ? (
          <p className="dark:text-gray-300 font-extrabold text-orange-500">
            You have not registered for any courses yet.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentData.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 min-h-[440px] flex flex-col justify-between"
              >
                <img
                  src={course.images}
                  alt={course.course_title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block mb-2 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                      ID: {course.id}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {course.course_title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base  mb-3">
                      {course.description}
                    </p>
                    <p className="text-lg  text-gray-500 dark:text-gray-400 italic">
                      Instructor: <span className="font-bold">{course.instructor}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className=" -mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
                  >
                    Delete Course
                  </button>
                </div>
              </div>
            ))}
          </div>

        )}
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

export default MyCourses;
