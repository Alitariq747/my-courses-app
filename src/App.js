import { Fragment, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthRoute from "./components/AuthRoute";
import Categories from "./components/Categories";
import CourseList from "./components/CourseList";
import Login from "./components/Login";
import FavoriteCourses from "./components/PremiumCourses";
import Register from "./components/Register";
import FavouritesProvider from "./context/FavoritesContext";

const theme = createTheme();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <ThemeProvider theme={theme}>
      <FavouritesProvider>
        <Router>
          <Fragment>
            <Navbar onSearch={handleSearch} />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Categories selectCategory={handleCategory} />
                    <CourseList
                      selectedCategory={selectedCategory}
                      searchQuery={searchQuery}
                    />
                  </Fragment>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<AuthRoute />}>
                <Route path="/premium courses" element={<FavoriteCourses />} />
              </Route>
            </Routes>
          </Fragment>
        </Router>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;
