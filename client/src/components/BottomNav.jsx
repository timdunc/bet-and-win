import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "green",
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "orange",
    },
  },
}));

const BottomNav = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  return (
    <div className={classes.bottomNav}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        style={{width: "100%"}}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default BottomNav;
