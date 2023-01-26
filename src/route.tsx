import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TopPage} from "./pages/toppage";
import {Contests} from "./pages/contests";
import {Contest} from "./pages/Contest";
import {ContestTop} from "./pages/contest-top";
import {ContestProblem} from "./pages/contest-problem";
import {ContestResult} from "./pages/contest-result";
import {ContestRanking} from "./pages/contest-ranking";
import {Header} from "./components/header";
import {NotFound} from "./pages/NotFound";
import {Login} from "./pages/login";
import {Footer} from "./components/footer";
import Container from "@mui/material/Container";
export const Router:React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Container style={{width:'100%'}}>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<TopPage/>}/>
                        <Route path='contests' element={<Contests/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path=':contestId' element={<Contest/>}>
                            <Route path='contest-top' element={<ContestTop/>}/>
                            <Route path='problem' element={<ContestProblem/>}/>
                            <Route path='ranking' element={<ContestRanking/>}/>
                            <Route path='result' element={<ContestResult/>}/>
                        </Route>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </>
    )
}