import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../fixtures/theme";
interface Props {
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    isAlways: boolean;
    link: string;
}

const ContestPanel: React.FC<Props> = (props) => {
    const color = props.isAlways ? "solid 3px #3A88D0" : "solid 3px #22DC22";
    const boxShadow = props.isAlways ? "0px 0px 5px 1px #3A88D0" : "0px 0px 5px 1px #22DC22";

    return (
        <ThemeProvider theme={theme}>
            <Link to={props.link} style={{textDecoration: "none", color: "#000", margin: "0.5rem"}}>
                <Box
                    sx={{
                        width: "20rem",
                        height: "12rem",
                        backgroundColor: undefined,
                        borderRadius: "1rem",
                        display: "flex",
                        border: color,
                        flexDirection: "column",
                        transition: "all 0.3s",
                        ":hover": {
                            top : "-2px",
                            border: color,
                            boxShadow: boxShadow,
                        },
                    }}
                >
                    <Box sx={{
                        mt: "0.4rem",
                        ml: "0.4rem",
                        width: "8rem",
                        height: "1.3rem",
                        border: color,
                        borderRadius: "0.5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.8rem",
                    }}>
                        <Typography variant={"body2"} sx={{fontWeight: "semibold"}}>常時開催コンテスト</Typography>
                    </Box>
                    <center>
                        <Typography variant={"h4"} m={2}　sx={{fontWeight: "semibold"}}>{props.title}</Typography>
                        <Typography variant={"body2"} align={"left"} sx={{width:"95%"}}>{props.description}</Typography>
                    </center>
                </Box>
            </Link>
        </ThemeProvider>
    )
}
export default ContestPanel;