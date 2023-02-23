import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    title: string;
    description: string;
    link: string;
}
const ConstestPage: React.FC<Props> = ({
                                           title,
                                           description,
                                           link
                                       }) => {
    return (
        <>
            <Box sx={{
                backgroundColor: "#D7FFD0",
                height: "10rem",
                width: "auto",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
            }}>
                <Stack spacing={2} sx={{justifyContent: "center"}}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="subtitle2">{description}</Typography>
                    <center>
                            <Button variant="contained" disableElevation sx={{
                                backgroundColor: "#F5DFA5",
                                borderRadius: "20px",
                                width: "5rem",
                                height: "2rem",
                                color: "#000",
                                textDecoration: "none",
                                ":hover":{
                                    backgroundColor: "#a99764"
                                }
                            }}><Link to={link} style={{
                                textDecoration: "none",
                                fontSize: "0.7rem",
                                color: "#000",
                            }}>参加する</Link></Button>
                    </center>
                </Stack>
            </Box>
        </>
    )
}

export default ConstestPage