import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Avatar } from "@mui/material";

import GamesData from "../footballData.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// const options = {
//   method: "GET",
//   url: "https://sportscore1.p.rapidapi.com/events",
//   params: { page: "1" },
//   headers: {
//     "x-rapidapi-key": "40dbde957amsh6972b7d156c9ba9p1d1af9jsn53e13c2ef4b2",
//     "x-rapidapi-host": "sportscore1.p.rapidapi.com",
//   },
// };

// myApiToken: ""

const Odds = () => {
  // const [gamesData, setGamesData] = useState([]);

  // useEffect(() => {
  //   const fetchGamesData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       setGamesData(response.data.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchGamesData();
  // }, []);

  const teamsBySeason = GamesData.reduce((acc, item) => {
    const seasonName = item.season.name;

    if (!acc[seasonName]) {
      acc[seasonName] = [];
    }

    acc[seasonName].push({
      home_team: item.home_team.name,
      away_team: item.away_team.name,
      home_team_logo: item.home_team.logo,
      away_team_logo: item.away_team.logo,
      start_at: item.start_at,
    });

    return acc;
  }, {});

  const uniqueTeamsBySeason = Object.keys(teamsBySeason).map((seasonName) => {
    return {
      seasonName: seasonName,
      games: teamsBySeason[seasonName],
    };
  });

  return (
    <>
      {uniqueTeamsBySeason.map((item) => (
        <div key={item.seasonName}>
          <TableContainer
            component={Paper}
            style={{ marginTop: "10px" }}
            
          >
            <Table sx={{  }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>{item.seasonName}</StyledTableCell>
                  <StyledTableCell align="right">
                    Event&nbsp;Date
                  </StyledTableCell>
                  <StyledTableCell align="right">1</StyledTableCell>
                  <StyledTableCell align="right">draw</StyledTableCell>
                  <StyledTableCell align="right">2</StyledTableCell>
                </TableRow>
              </TableHead>
                <TableBody>
              {item.games.map((item) => (
                  <StyledTableRow key={item.home_team_logo + item.away_team_logo}>
                    <StyledTableCell component="th" scope="row">
                      <div style={{ display: "flex", fontWeight: "bold" }}>
                        {item.home_team}
                        <Avatar
                          alt="Remy Sharp"
                          src={item.home_team_logo}
                          sx={{ width: 24, height: 24 }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                        />
                        Vs
                        <Avatar
                          alt="Remy Sharp"
                          src={item.away_team_logo}
                          sx={{ width: 24, height: 24 }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                        />
                        {item.away_team}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.start_at}
                    </StyledTableCell>
                    <StyledTableCell align="right">N/A</StyledTableCell>
                    <StyledTableCell align="right">N/A</StyledTableCell>
                    <StyledTableCell align="right">N/A</StyledTableCell>
                  </StyledTableRow>
              ))}
                </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </>
  );
};

export default Odds;
