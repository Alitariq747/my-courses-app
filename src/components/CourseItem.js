/* eslint-disable no-unused-vars */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../context/AuthProvider";
import { useFavourite } from "../context/FavoritesContext";

const CourseItem = ({ course }) => {
  const { name, category, price, id, description } = course;

  const { user } = useAuth();

  const { addFavorite, favorites, removeFavorite } = useFavourite();

  const isFavorite = favorites.includes(course);

  const handleAdd = (course) => {
    if (!isFavorite) {
      addFavorite(course);
    } else {
      removeFavorite(course);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image={`../images/${name}.png`}
      />
      <CardContent sx={{ height: 130 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price}</Button>
        <Button size="small" disabled={!user} onClick={() => handleAdd(course)}>
          {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseItem;
