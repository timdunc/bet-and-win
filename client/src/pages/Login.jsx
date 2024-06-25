import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import LeftBar from "../components/LeftBar";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const drawerWidth = 240;

const noScrollbarStyle = {
  overflow: "scroll",
  msOverflowStyle: "none", // Internet Explorer 10+
  scrollbarWidth: "none", // Firefox
};
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.up("sm")]: {
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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://betandwin.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const API_URL = "https://bet-and-win.onrender.com";

const Login = () => {
  const classes = useStyles();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/auth/login`, {
        phonenumber: phoneNumber,
        pin: password,
      })
      .then((response) => {
        setLoggedInUser(response.data);

        localStorage.setItem(
          "user",
          JSON.stringify({ phonenumber: response.data.phonenumber })
        );
        Cookies.set("userCookie", { phonenumber: response.data.phonenumber });

        console.log(response.data);
        // Login was successful, you can redirect the user or show a success message
      })
      .catch((error) => {
        console.log(error);
        // Handle login error
      });
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <NavBar />
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
          className={classes.root}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              BETandWIN
            </Typography>
            {/* <CustomComponent /> */}
          </Toolbar>
          <div style={noScrollbarStyle}>
            <Divider />
            <List>
              {["Home", "Live", "Upcomming"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{ color: "black" }}>
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <LiveTvIcon />}
                      {index === 2 && <AvTimerIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Divider />
            <LeftBar />
            <Divider />
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
          }}
          style={{}}
        >
          <Toolbar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#212121" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                  value={phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox value="remember" style={{ color: "#212121" }} />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "#212121" }}
                  onClick={handleLogin}
                >
                  {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : ( */}
                  Sign In
                  {/* )} */}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      style={{ textDecoration: "none" }}
                      // onClick={handleClickOpenSignup}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Divider />
          <LeftBar />
          <Divider />
          <LeftBar />
        </Drawer>
      </Box>
    </div>
  );
};

export default Login;
