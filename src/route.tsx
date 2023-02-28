import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Top from "./pages/top";
export const Router:React.FC = () => {
    return (
        <>
            <BrowserRouter >
                <Header userIcon="" userName="your name"　isLogin={true}/>
                <Routes>
                    <Route path="/" element={<Top/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
