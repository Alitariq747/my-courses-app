import { useFavourite } from "../context/FavoritesContext";
import CourseItem from "./CourseItem";
import "./courseList.css";

const FavoriteCourses = () => {
  const { favorites, isLoading } = useFavourite();

  console.log(favorites);

  if (isLoading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div className="course-list">
      {favorites.map((course) => (
        <div key={course.id}>
          <CourseItem course={course} />
        </div>
      ))}
    </div>
  );
};

export default FavoriteCourses;
