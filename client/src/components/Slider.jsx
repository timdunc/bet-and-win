import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ads: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      // height: "150px",
    },
    [theme.breakpoints.up("md")]: {
      // height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      // backgroundColor: "orange",
    },
  },

  toolbar: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: "5px",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "blue",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      // backgroundColor: "orange",
    },
  },

  slider: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      height: "150px",
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "purple",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "orange",
    },
  },
}));

import GamesData from "../footballData.json";
import GameCard from "./GameCard";

const Slider = () => {
  const classes = useStyles();

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

  const [, oneLeague] = uniqueTeamsBySeason;

  const leagues = [oneLeague.games];

  const newLeagues = leagues.at(0);

  return (
    <div className={classes.ads} style={{ marginTop: "10px" }}>
      {/* <Toolbar className={classes.toolbar}/> */}
      <div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            msOverflowStyle: "none", // Internet Explorer 10+
            scrollbarWidth: "none",
          }}
        >
          {newLeagues.map((league) => (
            <div key={league.home_team + league.away_team}>
              <GameCard league={league} />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Slider;
