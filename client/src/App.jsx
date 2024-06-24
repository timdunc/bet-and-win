import "./App.css";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import LeftBar from "./components/LeftBar";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AvTimerIcon from '@mui/icons-material/AvTimer';

const drawerWidth = 240;

const noScrollbarStyle = {
  overflow: 'scroll',
  msOverflowStyle: 'none',  // Internet Explorer 10+
  scrollbarWidth: 'none',   // Firefox
};

function App() {

  



  return (
    <>
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
            md={{display: "none"}}
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
                      <ListItemIcon style={{color: "black"}}>
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
            <Body />
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
    </>
  );
}

export default App;
