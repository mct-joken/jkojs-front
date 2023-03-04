import React from "react";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
}
const Contest: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <center>
        <Typography variant={"h4"} sx={{ m: "1rem" }}>
          {props.title}
        </Typography>
      </center>
      <Outlet />
    </ThemeProvider>
  );
};

export default Contest;
