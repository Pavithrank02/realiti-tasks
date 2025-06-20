import React, { useContext } from 'react'
import { courseData } from '../MOCK_DATA.js'
import { CourseContext } from '../context/CourseContext.js'

const CourseCard = () => {
  const { registerCourse } = useContext(CourseContext)
  console.log(registerCourse)
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {courseData && courseData.map((course) => (
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
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {course.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Instructor: <span className="font-medium">{course.instructor}</span>
              </p>
            </div>
            <button
              onClick={() => registerCourse(course)}
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Register
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseCard
