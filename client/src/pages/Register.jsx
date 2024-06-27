import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Cookies from "js-cookie";

const drawerWidth = 240;

import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";

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

const useStyles = makeStyles((theme) => ({
  main: {
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

import { useNavigate, Link } from "react-router-dom";
import DrawerRight from "../components/DrawerRight";
import DrawerLeft from "../components/DrawerLeft";
import BottomNav from "../components/BottomNav";

const API_URL = "https://bet-and-win.onrender.com";

const Register = () => {
  const classes = useStyles();

  const Navigate = useNavigate();

  const linkToLogin = () => {
    Navigate("/login");
  };

  const linkToHome = () => {
    Navigate("/");
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/auth/register`, {
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

        setMessage(response.data.message);

        setRegistered(true);

        // setState({
        //   open: true,
        //   Transition: Fade,
        // });

        console.log(response.data);
        Navigate("/login");
        // Registration was successful, you can redirect the user or show a success message
      })
      .catch((error) => {
        console.log(error);
        // Handle register error
      });
  };

  return (
    <>
      <div>
        <Box sx={{ display: "flex" }} className={classes.main}>
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

          <DrawerLeft />
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
                  Sign up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        type="number"
                        value={phoneNumber}
                        onChange={(event) => {
                          setPhoneNumber(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
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
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="allowExtraEmails"
                            style={{ color: "#212121" }}
                          />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: "#212121" }}
                    onClick={handleRegister}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={linkToLogin}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </Box>
          <DrawerRight />
        </Box>
      </div>
      <BottomNav />
    </>
  );
};

export default Register;
