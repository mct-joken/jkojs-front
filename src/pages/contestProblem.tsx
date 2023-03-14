import React, { memo, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";
import ContestHeader from "../component/ContestHeader";
import {
  FormControl,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import KaTeX from "../component/KaTeX";
import Box from "@mui/material/Box";
import languages from "../fixtures/languages";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
type Problem = {
  problems: [
    {
      id: string;
      title: string;
      text: string;
      limits: {
        memory: number;
        time: number;
      };
    }
  ];
};

export const Problem: React.FC = memo(() => {
  const [problem, setProblem] = useState<Problem>([]);
  const [selected, setSelected] = React.useState();
  const [language, setLanguage] = useState("C(GCC)");

  useEffect(() => {
    axios
      .get("localhost:3080/api/v1/contests/123123123/problems", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setProblem(response.data);
        setSelected(response.data[0].title);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ContestHeader selected={"problem"} />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: "50%",
            display: "block",
            justifyContent: "center",
          }}
        >
          <center>
            {/* ここで問題を選択する */}
            <FormControl variant="standard">
              <Select
                value={selected}
                label="問題"
                onChange={(event: SelectChangeEvent) => {
                  setSelected(event.target.value as string);
                }}
              >
                {problems.map((problem, index) => (
                  <MenuItem key={index} value={problem.title}>
                    {problem.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </center>
          {/*ここで問題の内容を表示する KaTeXを使う*/}
          <KaTeX
            description={
              selected === problems[0].title
                ? problems[0].description
                : selected === problems[1].title
                ? problems[1].description
                : selected === problems[2].title
                ? problems[2].description
                : problems[3].description
            }
          />
        </Box>
        {/*入力フォーム*/}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "block",
            backgroundColor: "#282C34",
            color: "#fff",
            autoComplete: "off",
            border: "1px solid #282C34",
          }}
        >
          <TextField
            multiline
            rows={"30"}
            variant="filled"
            sx={{
              fontWeight: "bold",
              width: "95%",
              height: "90%",
              "& .MuiInputBase-input": {
                color: "#fff",
              },
            }}
          />
          {/*右下のフォーム*/}
          <Box
            sx={{
              width: "100%",
              height: "4rem",
              backgroundColor: "#fff",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {/* 言語選択 */}
            <FormControl>
              <Select
                value={language}
                onChange={(event: SelectChangeEvent) => {
                  setLanguage(event.target.value as string);
                }}
              >
                {languages.map((language, num) => (
                  <MenuItem key={num} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/*提出するボタン*/}
            <Link
              to={"/1/result"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#FFD700",
                  },
                }}
              >
                提出
              </Button>
            </Link>
          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
});
