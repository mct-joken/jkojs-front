import {createTheme} from "@mui/material/styles";
import {responsiveFontSizes} from "@mui/material";

let theme = createTheme({
    typography: {
        fontFamily: [
            'IBM Plex Sans JP',
            'sans-serif',
        ].join(','),
    },
});
theme = responsiveFontSizes(theme);

export default theme;