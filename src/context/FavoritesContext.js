/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useAuth } from "./AuthProvider";

const FavouriteContext = createContext();

export const useFavourite = () => useContext(FavouriteContext);

const FavouritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const fetchFavorites = async () => {
    if (user) {
      const { data } = await supabase
        .from("favorite_courses")
        .select("*")
        .eq("user_id", user.id);
      console.log(data);
      setFavorites(data);
      setIsLoading(false);
    }
  };

  const addFavorite = async (course) => {
    const { data } = await supabase
      .from("favorite_courses")
      .insert([
        {
          id: course.id,
          name: course.name,
          description: course.description,
          price: course.price,
          category: course.category,
          user_id: user.id,
        },
      ])
      .select();
    setFavorites(() => [...favorites, course]);
  };

  const removeFavorite = async (course) => {
    const { data } = await supabase
      .from("favorite_courses")
      .delete()
      .eq("id", course.id)
      .eq("name", course.name)
      .eq("description", course.description)
      .eq("price", course.price)
      .eq("category", course.category)
      .eq("user_id", user.id);
    const updatedFavorites = favorites.filter((item) => item !== course);
    setFavorites(updatedFavorites);
  };

  return (
    <FavouriteContext.Provider
      value={{
        user,
        favorites,
        isLoading,
        addFavorite,
        isFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouritesProvider;
