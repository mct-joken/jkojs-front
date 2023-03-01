import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
import Contests from "./pages/contests";
export const Router:React.FC = () => {
    return (
        <>
            <BrowserRouter >
                <Header userIcon="" userName="your name"　isLogin={true}/>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                    <Route path="/contests" element={<Contests/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
