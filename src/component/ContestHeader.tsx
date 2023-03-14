import React from "react";
import { Stack, ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

interface Props {
  selected: string;
}
export const ContestHeader: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ justifyContent: "center" }}>
        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          sx={{ width: "100%", marginBottom: "3rem" }}
        >
          <Link to={"../top"} style={{ textDecoration: "none", color: "#000" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              トップ
            </Typography>
            {props.selected === "トップ" ? (
              <Box
                sx={{ width: "100%", height: "2px", backgroundColor: "#000" }}
              />
            ) : (
              <></>
            )}
          </Link>
          <Link
            to={"../problem"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              問題
            </Typography>
            {props.selected === "問題" ? (
              <Box
                sx={{ width: "100%", height: "2px", backgroundColor: "#000" }}
              />
            ) : (
              <></>
            )}
          </Link>
          <Link
            to={"../result"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              提出結果
            </Typography>
            {props.selected === "提出結果" ? (
              <Box
                sx={{ width: "100%", height: "2px", backgroundColor: "#000" }}
              />
            ) : (
              <></>
            )}
          </Link>
          <Link
            to={"../ranking"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ランキング
            </Typography>
            {props.selected === "ランキング" ? (
              <Box
                sx={{ width: "100%", height: "2px", backgroundColor: "#000" }}
              />
            ) : (
              <></>
            )}
          </Link>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
