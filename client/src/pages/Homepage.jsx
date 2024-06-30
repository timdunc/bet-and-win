import { Toolbar } from "@mui/material";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";
import Body from "../components/Body";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      gap: 0,
    },
    [theme.breakpoints.up("md")]: {
      gap: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.up("xl")]: {
      // backgroundColor: "white",
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Toolbar />
      <div style={{ display: "flex" }} className={classes.mainContainer}>
        <div style={{}}>
          <DrawerLeft />
        </div>
        <div
          style={{
            // paddingLeft: "10px",
            paddingTop: "10px",
            // paddingRight: "10px",
            // flexGrow: "1",
            // flexShrink: 1,
            overflowX: "hidden",
          }}
        >
          <Body />
        </div>
        <div>
          <DrawerRight />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Homepage;
