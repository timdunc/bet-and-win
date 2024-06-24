import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { Paper } from "@mui/material";

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

const Ads = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Paper>
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    style={{height: "300px"}}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Paper>
    </div>
  );
};

export default Ads;
