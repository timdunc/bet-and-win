import Body from "../components/Body";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
  main: {
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

  body: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.down("md")]: {
      padding: "24px",
      backgroundColor: "green",
    },
    [theme.breakpoints.up("md")]: {
      // padding: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "orange",
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{  }}>
        <Box sx={{ display: "flex" }} className={classes.main}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            className={classes.AppBar}
          >
            <NavBar />
          </AppBar>

          <DrawerLeft className={classes.drawerleft} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: 3,
            }}
            style={{ width: "100%", padding: 0 }}
            className={classes.body}
          >
            <Body />
          </Box>
          <DrawerRight />
        </Box>
      </div>
      <BottomNav />
    </>
  );
};

export default Homepage;
