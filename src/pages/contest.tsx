import React from "react";
import {ThemeProvider} from "@mui/system";
import theme from "../fixtures/theme";
import {Outlet} from "react-router-dom";

interface Props {
    title: string;
}
const Contest: React.FC<Props> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <center>{props.title}</center>
            <Outlet/>
        </ThemeProvider>
    );
};

export default Contest;