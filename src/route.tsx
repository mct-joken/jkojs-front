import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
import Contests from "./pages/contests";
import {ThemeProvider} from "@mui/system";
import theme from "./fixtures/theme";
import Mypage from "./pages/mypage";

export const Router:React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter >
                    <Header userIcon="" userName="your name"　isLogin={false}/>
                    <Routes>
                        <Route path="/" element={<Top/>}/>
                        <Route path="/contests" element={<Contests/>}/>
                        <Route path="/mypage" element={<Mypage/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}
