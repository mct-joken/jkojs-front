import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ConstestPage from "../components/constestPage";
export const TopPage:React.FC = () => {
    return (
        <center>
            <Container maxWidth="xl">
                <main>
                <h1>情報科学研究部</h1>
                <h2>オンラインジャッジシステム</h2>
                <p>初心者に優しい競技プログラミング向けジャッジサーバー</p>

                    <h2>コンテスト一覧</h2>
                    <Box sx={{
                        backgroundColor: "#000",
                        height: "2px",
                        width: "100%",
                    }}/>
                    <ConstestPage title="チュートリアル" description="これは練習用の常設コンテストです"/>
                </main>
            </Container>

        </center>
    )
}