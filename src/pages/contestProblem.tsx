import React, { memo, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import { ContestHeader } from "../component/ContestHeader";
import {
  FormControl,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import KaTeX from "../component/KaTeX";
import Box from "@mui/material/Box";
import { languages } from "../fixtures/languages";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base64Encode } from "../fixtures/Base64";

type problemType = {
  id: string;
  title: string;
  text: string;
  limit: {
    time: number;
    memory: number;
  };
};

// eslint-disable-next-line react/display-name
export const ContestProblem: React.FC = memo(() => {
  const [problems, setProblems] = useState<problemType[]>();
  const [selected, setSelected] = React.useState("");
  const [language, setLanguage] = useState("C(GCC)");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  // URLからcontestIdを取得する
  const pathname = window.location.pathname; // "{contestId}/problems というurlが入っている"
  const contestId: string = pathname.split("/")[1];
  // 最初に問題を取得する
  useEffect(() => {
    axios
      .get(`https://ojs.joken.dev/api/v1/contests/${contestId}/problems`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setProblems(response.data.problems);
        setSelected(response.data.problems[0].title);
      });
  }, []);
  // 問題提出する関数
  const onClickSubmit = async () => {
    const encodedCode = base64Encode(code);
    const submissionStatus = await axios
      .post(
        `https://ojs.joken.dev/api/v1/contests/${contestId}/submissions`,
        {
          problemID: problems?.find((p) => p.title === selected)?.id,
          code: encodedCode,
          language: language,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        navigate("../result");
      })
      .catch((error) => {
        error.response.status === 400
          ? alert("正常に提出できませんでした")
          : error.response.status === 403
          ? alert("提出制限がかかっています。これ以上提出できません")
          : alert("エラー");
        console.log("submissionStatus", submissionStatus);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%", flexDirection: "column", display: "flex" }}>
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
              {/* ここで問題を選択する nullかどうかをはんべつする*/}
              <FormControl variant="standard">
                <Select
                  value={selected}
                  label="問題"
                  onChange={(event: SelectChangeEvent) => {
                    setSelected(event.target.value as string);
                  }}
                >
                  {problems !== undefined &&
                    problems.map((problem) => (
                      <MenuItem key={problem.id} value={problem.title}>
                        {problem.title}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </center>
            {problems !== undefined && problems !== null && (
              <KaTeX
                description={
                  problems.find((p) => p.title === selected)?.text || ""
                }
              />
            )}
          </Box>
          {/*入力フォーム*/}
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              backgroundColor: "#282C34",
              color: "#fff",
              autoComplete: "off",
              border: "1px solid #282C34",
              flex: "2 1 50%",
              flexDirection: "column",
            }}
          >
            <TextField
              multiline
              rows={"30"}
              variant="filled"
              onChange={(event) => {
                setCode(event.target.value);
              }}
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
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#FFD700",
                  },
                }}
                onClick={onClickSubmit}
              >
                提出
              </Button>
            </Box>
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
});
