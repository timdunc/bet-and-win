// import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

const LeftBar = () => {
  const [expanded, setExpanded] = useState(false);

  const [leaguesData, setLeaguesData] = useState([]);
  const [seasonsData, setSeasonsData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [continentsData, setContinentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api_token = "0F12TW7oEzvWYQEermmNDV0hpGdPmiCVzETOf6RKdcZM6VMrRvPxDHwjb6MQ"; // Replace with your actual token
      const apiUrl = `/v3/football/leagues?api_token=${api_token}`;

      try {
        const response = await axios.get(apiUrl);
        setLeaguesData(response.data.data);
        // console.log("Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchSeasonsData = async () => {
      const api_token =
        "0F12TW7oEzvWYQEermmNDV0hpGdPmiCVzETOf6RKdcZM6VMrRvPxDHwjb6MQ"; // Replace with your actual token
      const apiUrl = `/v3/football/seasons?api_token=${api_token}`;

      try {
        const response = await axios.get(apiUrl);
        setSeasonsData(response.data.data);
        // console.log("Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCountriesData = async () => {
      const api_token =
        "0F12TW7oEzvWYQEermmNDV0hpGdPmiCVzETOf6RKdcZM6VMrRvPxDHwjb6MQ"; // Replace with your actual token
      const apiUrl = `https://soccer.sportmonks.com/api/v2.0/countries?api_token=${api_token}`;

      try {
        const response = await axios.get(apiUrl);
        setCountriesData(response.data.data);
        // console.log("Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchContinentsData = async () => {
      const api_token =
        "0F12TW7oEzvWYQEermmNDV0hpGdPmiCVzETOf6RKdcZM6VMrRvPxDHwjb6MQ"; // Replace with your actual token
      const apiUrl = `https://soccer.sportmonks.com/api/v2.0/continents?api_token=${api_token}`;

      try {
        const response = await axios.get(apiUrl);
        setContinentsData(response.data.data);
        // console.log("Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchSeasonsData();
    fetchCountriesData();
    fetchContinentsData();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ fontWeight: "bold" }}
          >
            LEAGUES
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "auto", marginLeft: "-20px" }}>
          <>
            <MenuList>
              {leaguesData.map((league, i) => (
                <MenuItem key={i}>
                  <ListItemText>{league.name}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ fontWeight: "bold" }}
          >
            COUNTRIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "auto", marginLeft: "-20px" }}>
          <>
            <MenuList>
              {countriesData.map((country, i) => (
                <MenuItem key={i}>
                  <Avatar
                    alt="Remy Sharp"
                    src={country.image_path}
                    sx={{ width: 24, height: 24 }}
                    style={{ marginRight: "5px" }}
                  />
                  <ListItemText>{country.name}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ fontWeight: "bold" }}
          >
            CONTINENTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "auto", marginLeft: "-20px" }}>
          <>
            <MenuList>
              {continentsData.map((continent, i) => (
                <MenuItem key={i}>
                  <ListItemText>{continent.name}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ fontWeight: "bold" }}
          >
            SEASONS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <MenuList>
              {seasonsData.map((season, i) => (
                <MenuItem key={i}>
                  <ListItemText>{season.name}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeftBar;
