import { Divider, Toolbar } from "@mui/material";
import LeftBar from "./LeftBar";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

const noScrollbarStyle = {
  overflow: "scroll",
  msOverflowStyle: "none", // Internet Explorer 10+
  scrollbarWidth: "none", // Firefox
};
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawerRight: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "green",
      display: "none",
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

const DrawerRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.drawerRight}>
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
        <div style={noScrollbarStyle}>
          <Toolbar />
          <Divider />
          <LeftBar />
          <Divider />
          <LeftBar />
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerRight;
