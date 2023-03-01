import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
import Contests from "./pages/contests";
import {ThemeProvider} from "@mui/system";
import theme from "./fixtures/theme";
import ContestTop from "./pages/contestTop";
import Contest from "./pages/contest";

export const Router:React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter >
                    <Header userIcon="" userName="your name"　isLogin={true}/>
                    <Routes>
                        <Route path="/" element={<Top/>}/>
                        <Route path="/contests" element={<Contests/>}/>
                        <Route　path=":contestId" element={<Contest　title={"テスト用"}/>}>
                            <Route path="top" element={<ContestTop　/>}/>
                        </Route>
                        <Route path="*" element={<div>404</div>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}
