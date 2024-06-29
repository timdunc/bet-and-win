import Box from "@mui/material/Box";
import Ads from "./Ads";
import Odds from "./Odds";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const optionsNFL = {
//   method: "GET",
//   url: "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores",
//   params: { daysFrom: "3" },
//   headers: {
//     "x-rapidapi-key": "40dbde957amsh6972b7d156c9ba9p1d1af9jsn53e13c2ef4b2",
//     "x-rapidapi-host": "odds.p.rapidapi.com",
//   },
// };

import { makeStyles } from "@mui/styles";
import { Toolbar } from "@mui/material";
import Slider from "./Slider";

const useStyles = makeStyles((theme) => ({
  feed: {
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      // backgroundColor: "white",
      // width: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "white",
    },
    [theme.breakpoints.up("xl")]: {
      // backgroundColor: "white",
    },
  },
  bottomToolbar: {
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("md")]: {
      display: "none",
      // backgroundColor: "blue",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      // backgroundColor: "orange",
    },
  },
}));

const Body = () => {
  const classes = useStyles();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(optionsNFL);
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box
      sx={{}}
      style={{
        height: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        // width: "100vw",
      }}
      className={classes.feed}
    >
      <Ads />
      <Slider />
      <Odds />
      <Toolbar className={classes.bottomToolbar} />
    </Box>
  );
};

export default Body;
