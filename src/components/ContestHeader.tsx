import React from "react";
import {Link} from "react-router-dom";
import {Divider, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

interface Props {
    page: string;
}

const normal = {
    textAlign: "center",
    color: "#000",
    height: "1rem",
    textDecoration: "none",
}
const current = {
    textAlign: "center",
    color: "#000",
    height: "1.1rem",
    fontWeight: "bold",
    textDecoration: "underline",
}
const linkstyle = {
    textDecoration: "none",
}

const ContestHeader: React.FC<Props> = ({page}) => {
    return (
        <center>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={5}
                sx={{
                    justifyContent: "center"
                }}
            >
                <Link to="/contestId/top" style={linkstyle}><Button><Typography sx={page === "top" ? current : normal}>説明</Typography></Button></Link>
                <Link to="/contestId/problem"style={linkstyle}><Button><Typography sx={page === "problem" ? current : normal}>問題</Typography></Button></Link>
                <Link to="/contestId/result"style={linkstyle}><Button><Typography sx={page === "result" ? current : normal}>提出結果</Typography></Button></Link>
                <Link to="/contestId/ranking"style={linkstyle}><Button><Typography sx={page === "ranking" ? current : normal}>ランキング</Typography></Button></Link>
            </Stack>
        </center>
    )
}

export default ContestHeader;