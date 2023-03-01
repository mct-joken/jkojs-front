import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
import Contests from "./pages/contests";
import {ThemeProvider} from "@mui/system";
import theme from "./fixtures/theme";

export const Router:React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter >
                    <Header userIcon="" userName="your name"　isLogin={true}/>
                    <Routes>
                        <Route path="/" element={<Top/>}/>
                        <Route path="/contests" element={<Contests/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}
