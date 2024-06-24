import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Ads from "./Ads";
import Odds from "./Odds";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const optionsNFL = {
//   method: "GET",
//   url: "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores",
//   params: { daysFrom: "3" },
//   headers: {
//     "x-rapidapi-key": "40dbde957amsh6972b7d156c9ba9p1d1af9jsn53e13c2ef4b2",
//     "x-rapidapi-host": "odds.p.rapidapi.com",
//   },
// };

const Body = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.request(optionsNFL);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
        style={{ height: "100vh" }}
      >
        <Grid>
          <Grid item xs={6} style={{}}>
            <Item>
              <Ads />
              <Odds />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Body;
