import { createContext, useEffect, useState } from "react";

export const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [registered, setRegistered] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("registered")) || []
    setRegistered(data)
  }, [])

  useEffect(() => {
    localStorage.setItem("registered", JSON.stringify(registered))
  }, [registered])

  const registerCourse = (course) => {
    const alreadyRegistered = registered.find(c => c.id === course.id)
    if (!alreadyRegistered) {
      setRegistered(prev => [...prev, course])
    }
  }
  const removeCourse = (courseId) => {
    setRegistered((prev) => prev.filter((course) => course.id !== courseId));
  };

  return (
    <CourseContext.Provider value={{ registered, registerCourse, removeCourse }}>
      {children}
    </CourseContext.Provider>
  )
}