import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import LeftBar from "../components/LeftBar";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AvTimerIcon from "@mui/icons-material/AvTimer";

const drawerWidth = 240;

const noScrollbarStyle = {
  overflow: "scroll",
  msOverflowStyle: "none", // Internet Explorer 10+
  scrollbarWidth: "none", // Firefox
};
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawerLeft: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "green",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "blue",
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

const DrawerLeft = () => {
  const classes = useStyles();
  return (
    <div>
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
        className={classes.drawerLeft}
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
    </div>
  );
};

export default DrawerLeft;
