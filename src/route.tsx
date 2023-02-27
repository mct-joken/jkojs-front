import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
export const Router:React.FC = () => {
    return (
        <>
            <BrowserRouter >
                <Header userIcon="" userName="your name"/>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
