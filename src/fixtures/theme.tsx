import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["IBM Plex Sans JP", "sans-serif"].join(","),
    },
  })
);
export default theme;
