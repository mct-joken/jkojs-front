import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TopPage} from "./pages/toppage";
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
import Userpage from "./pages/userpage";
export const Router:React.FC = () => {
    const Name = "kijiharu";
    const Image = "https://2.bp.blogspot.com/-92v03A2PkYk/WdyDSK1210I/AAAAAAABHbI/Hjr-UvR8d-AcoPNABFAPvs7iN1Bl4NxjgCLcBGAs/s400/character_program_fat.png"
    return (
        <>
            <BrowserRouter>
                <Container style={{width:'100%'}}>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<TopPage/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/mypage' element={<Userpage userName={Name} userImage={Image} isme={true}/>}/>
                        <Route path='/userpage' element={<Userpage userName={Name} userImage={Image} isme={false}/>}/>
                        <Route path='/:contestId' element={<Contest/>}>
                            <Route path='top' element={<ContestTop/>}/>
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
