import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header";
import { Top } from "./pages/top";
import { Contests } from "./pages/contests";
import { ThemeProvider } from "@mui/system";
import { theme } from "./fixtures/theme";
import { Mypage } from "./pages/mypage";
import { ContestTop } from "./pages/contestTop";
import { Contest } from "./pages/contest";
import { ContestProblem } from "./pages/contestProblem";
import { ContestResult } from "./pages/contestResult";
import { ContestRanking } from "./pages/contestRanking";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import Container from "@mui/material/Container";

export const Router: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container sx={{ display: "block", height: "100%" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/contests" element={<Contests />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path=":contestId"
                element={<Contest title={"テスト用コンテスト"} />}
              >
                <Route path="top" element={<ContestTop />} />
                <Route path="problem" element={<ContestProblem />} />
                <Route path="result" element={<ContestResult />} />
                <Route path="ranking" element={<ContestRanking />} />
              </Route>
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
