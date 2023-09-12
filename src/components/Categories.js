import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoryList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: theme.spacing(2, 4), // Add padding at top and bottom
  },

  categoryButton: {
    color: "black",
    marginRight: theme.spacing(2),
    textTransform: "none", // Disable text transformation
  },
}));

const Categories = ({ selectCategory }) => {
  const classes = useStyles();

  const categories = [
    "Programming",
    "Business",
    "Data Science",
    "Personal Development",
    "Finance And Accounting",
    "All",
    "Office Productivity",
    "Design",
    "Health And Fitness",
    // Add more categories as needed
  ];

  return (
    <>
      <hr />
      <div className={classes.categoryList}>
        {categories.map((category) => (
          <Button
            key={category}
            className={classes.categoryButton}
            variant="text"
            onClick={() => selectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <hr />
    </>
  );
};

export default Categories;
