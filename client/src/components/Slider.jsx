import { useTheme } from "@mui/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "",
    imgPath:
      "https://st3.depositphotos.com/11433486/16574/v/1600/depositphotos_165746998-stock-illustration-soccer-or-football-black-banner.jpg",
  },
  {
    label: "San Francisco",
    imgPath:
      "https://img.freepik.com/premium-photo/football-banner-cropped-soccer-ball-dark-background-copy-space_183270-2663.jpg?w=1060",
  },
  {
    label: "Bird",
    imgPath:
      "https://www.shutterstock.com/shutterstock/photos/684116602/display_1500/stock-photo-sport-betting-concept-american-football-sportsman-player-on-black-background-with-copy-space-684116602.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://img.freepik.com/free-photo/soccer-balloon-camp-monochrome-scene-generative-ai_188544-9745.jpg?w=1380&t=st=1718985239~exp=1718985839~hmac=a219c49c38c1a054552412153171dd6dd35fedc5970667c29e11e16df671d1cc",
  },
];

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

const Slider = () => {
  const classes = useStyles();

  const theme = useTheme();

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
          <div>
            <Card sx={{ width: 345, marginBottom: "2px" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>

          <div>
            <Card sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>

          <div>
            <Card sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div style={{ marginRight: "-10px" }}>
            <Card sx={{ width: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
