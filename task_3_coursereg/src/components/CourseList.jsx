import React, { useState } from "react";
import CourseCard from "./CourseCard";
import SearchFilter from "./SearchFilter";
import { courseData } from "../MOCK_DATA";

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCourses = courseData.filter((course) =>
    course.course_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <CourseCard courses={filteredCourses} />
    </div>
  );
};

export default CourseList;
