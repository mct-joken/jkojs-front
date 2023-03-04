import { Stack, ThemeProvider } from "@mui/system";
import React from "react";
import theme from "../fixtures/theme";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  title: string;
  memory: string;
  time: string;
  language: string;
  status: string;
}
const Result: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <center>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant={"body2"}>{props.title}</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant={"body2"}>{props.memory}kB</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant={"body2"}>{props.time}ms</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant={"body2"}>{props.language}</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant={"body2"}>{props.status}</Typography>
        </Box>
      </center>
    </ThemeProvider>
  );
};
export default Result;
