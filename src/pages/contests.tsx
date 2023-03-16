import React, { useEffect } from "react";
import { ContestPanel } from "../component/ContestPanel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../fixtures/theme";
import axios from "axios";
type Contest = {
  id: string;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  updatedAt: string;
};
export const Contests: React.FC = () => {
  const [select, setSelect] = React.useState("all");
  const [contests, setContests] = React.useState<Contest[]>([]);
  useEffect(() => {
    axios
      .get("https://ojs.joken.dev/api/v1/contests", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setContests(res.data);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <main>
        <center>
          <Typography
            variant={"h4"}
            sx={{
              mt: 6,
              justifyContent: "center",
              fontWeight: "semibold",
            }}
          >
            コンテスト一覧
          </Typography>
          <Box
            sx={{
              width: "50%",
              minWidth: "300px",
              maxWidth: "600px",
              backgroundColor: "#000",
              height: "5px",
              mb: 2,
            }}
          />
        </center>
        <ButtonGroup size={"small"} sx={{ mb: 3 }}>
          <Button
            onClick={() => setSelect("all")}
            sx={{
              backgroundColor: select === "all" ? "#ceebf2" : "#fff",
            }}
          >
            全て
          </Button>
          <Button
            onClick={() => setSelect("always")}
            sx={{
              backgroundColor: select === "always" ? "#ceebf2" : "#fff",
            }}
          >
            常設
          </Button>
          <Button
            onClick={() => setSelect("notAlways")}
            sx={{
              backgroundColor: select === "notAlways" ? "#ceebf2" : "#fff",
            }}
          >
            開催予定
          </Button>
        </ButtonGroup>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {contests.map((contest) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <ContestPanel
                title={contest.title}
                description={contest.description}
                startTime={contest.startAt}
                endTime={contest.endAt}
                link={contest.id}
              />
            );
          })}
        </Container>
      </main>
    </ThemeProvider>
  );
};
