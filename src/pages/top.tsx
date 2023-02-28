import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const Top: React.FC = () => {
    return (
        <>
            <Container sx={{
                mt: 6,
            }}>
                <Typography variant={"h5"}>松江高専　情報科学研究部</Typography>
                <Typography variant={"h5"}>オンラインジャッジシステム</Typography>
                <Typography variant={"subtitle2"} sx={{
                    mt: 2,
                }}>
                    JKOJSは、競技プログラミングのためのオンラインジャッジシステムです。
                    ユーザーは、提示された問題に対して自分のプログラムを作成し、オンライン上で提出することができます。提出されたプログラムは自動的に評価され、正しい解法があれば合格となります。このシステムは、プログラミング能力を競うコンテストや、プログラミング技術を向上させたい開発者の方々に最適です。
                    私たちのオンラインジャッジシステムを使って、プログラミングスキルを磨き、自己成長を目指してみませんか？
                </Typography>
                <center>
                    <Link to={"/contests"}>
                        <Button variant={"contained"} sx={{
                            mt: 2,
                            justifySelf: "center",
                            backgroundColor: "#FFD700",
                            color: "#000",
                            ":hover": {
                                backgroundColor: "#FFD700",
                            }
                        }}>コンテスト一覧</Button>
                    </Link>
                </center>
            </Container>
        </>
    );
};

export default Top;