import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Button, Fade, Snackbar, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

// import axios from "axios";
import Cookies from "js-cookie";
import { useTheme } from "@mui/styles";

import PropTypes from "prop-types";

import { Link, useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "green",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "orange",
    },
  },
}));

const NavBar = ({ loggedInUser }) => {
  const classes = useStyles();

  const theme = useTheme();

  const Navigate = useNavigate();

  const linkToLogin = () => {
    Navigate("/login");
  };

  const linkToHome = () => {
    Navigate("/");
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [openSignup, setOpenSignup] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClickOpen = () => {
    setOpenSignup(false);
    setMobileMoreAnchorEl(null);
  };

  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // const handleOpenSnack = (Transition) => () => {
  //   setState({
  //     open: true,
  //     Transition,
  //   });
  // };

  const handleCloseSnack = () => {
    setState({
      ...state,
      open: false,
    });
  };

  // Get the user data from local storage
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    Cookies.remove("userCookie");
    window.location.reload();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={
          userData?.phonenumber ? handleProfileMenuOpen : handleClickOpen
        }
      >
        {userData?.phonenumber ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>{userData.phonenumber}</p>
          </>
        ) : (
          <>
            <Link
              onClick={linkToLogin}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Login</p>
            </Link>
          </>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box
        sx={{ flexGrow: 1, "& button": { m: 1 } }}
        className={classes.navbar}
        style={{}}
      >
        <AppBar
          position="fixed"
          style={{ backgroundColor: theme.palette.primary.main }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "10px"}}>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { sm: "block" } }}
                  style={{ cursor: "pointer" }}
                  onClick={linkToHome}
                >
                  BETAND
                </Typography>
              </div>
              <div>
                <Search style={{ width: "100%" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>
              <div>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {userData?.phonenumber ? (
                      <>
                        {" "}
                        <Typography>
                          RWF
                          {loggedInUser?.balance}
                          .00
                        </Typography>
                        <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                      </>
                    ) : (
                      <Button
                        edge="end"
                        variant="contained"
                        size="small"
                        style={{ height: "30px", backgroundColor: "#424242" }}
                        onClick={linkToLogin}
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      <Snackbar
        open={state.open}
        onClose={handleCloseSnack}
        TransitionComponent={state.Transition}
        message={message}
        key={state.Transition.name}
        autoHideDuration={2000}
      />
    </>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool,
  loggedInUser: PropTypes.object,
};

export default NavBar;
