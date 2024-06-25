// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Customize your font
  },
  // Add more customizations here
});

export default theme;
