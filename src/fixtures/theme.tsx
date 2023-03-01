import {createTheme} from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";

let theme = createTheme();
theme.typography.fontFamily = 'IBM Plex Sans JP';
theme = responsiveFontSizes(theme);


export default theme;