import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
import Contests from "./pages/contests";
import { ThemeProvider } from "@mui/system";
import theme from "./fixtures/theme";
import Mypage from "./pages/mypage";
import ContestTop from "./pages/contestTop";
import Contest from "./pages/contest";
import Problem from "./pages/problem";
import ContestResult from "./pages/contestResult";

export const Router: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header userIcon="" userName="your name" isLogin={false} />
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route
              path=":contestId"
              element={<Contest title={"テスト用コンテスト"} />}
            >
              <Route path="top" element={<ContestTop />} />
              <Route path="problem" element={<Problem />} />
              <Route path="result" element={<ContestResult />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
