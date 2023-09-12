import React from "react";
import { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { alpha } from "@mui/system";

import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff", // Set the background color
    boxShadow: "none", // Remove the box shadow
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    flex: 1, // Allow the search bar to take available space
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%", // Adjust the width as needed
      marginLeft: theme.spacing(5),
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = ({ onSearch }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const classes = useStyles();
  const theme = useTheme();

  const searchInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const query = searchInputRef.current.value;
    onSearch(query);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
    alert("Successfully Logged Out!");
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          My-Courses-app
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <form onSubmit={submitHandler}>
            <InputBase
              // placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              inputRef={searchInputRef}
            />
            <Button className={classes.button} color="inherit" type="submit">
              Search
            </Button>
          </form>
        </div>
        {user ? (
          <Button
            className={classes.button}
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            className={classes.button}
            color="inherit"
            onClick={handleLogin}
          >
            {" "}
            Login
          </Button>
        )}
        <IconButton
          className={classes.iconButton}
          color="inherit"
          onClick={() => navigate("/premium courses")}
        >
          {user ? <FavoriteIcon /> : null}
        </IconButton>
        <IconButton className={classes.iconButton} color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton className={classes.iconButton} color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
