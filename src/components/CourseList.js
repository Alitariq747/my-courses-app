import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import CourseItem from "./CourseItem";
import "./courseList.css";

const CourseList = ({ selectedCategory, searchQuery }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const { data } = await supabase.from("courses").select();

    setCourses(data);
    setIsLoading(false);
  };

  let filteredCourses;

  !selectedCategory || selectedCategory === "All"
    ? (filteredCourses = courses)
    : (filteredCourses = courses.filter(
        (course) => course.category === selectedCategory
      ));

  !searchQuery
    ? // eslint-disable-next-line no-self-assign
      (filteredCourses = filteredCourses)
    : (filteredCourses = filteredCourses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));

  if (isLoading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div className="course-list">
      {filteredCourses.length !== 0 ? (
        filteredCourses.map((course) => (
          <div key={course.id}>
            <CourseItem course={course} />
          </div>
        ))
      ) : (
        <h3 style={{ textAlign: "center", color: "purple" }}>
          Oops! Sorry No Courses Available For The Selected Category
        </h3>
      )}
    </div>
  );
};

export default CourseList;
