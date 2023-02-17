import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";

interface Props {
    title: string;
    description: string;
}
const ConstestPage: React.FC<Props> = ({
                                           title,
                                           description,
                                       }) => {
    return (
        <>
            <Box sx={{
                backgroundColor: "#D7FFD0",
                height: "12rem",
                width: "auto",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
            }}>
                <Stack spacing={2} sx={{justifyContent: "center"}}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h6">{description}</Typography>
                    <center>
                        <Button variant="contained" disableElevation sx={{
                            backgroundColor: "#F5DFA5",
                            borderRadius: "20px",
                            width: "7rem",
                            height: "3rem",
                            color: "#000",
                            textDecoration: "none",
                            ":hover":{
                                backgroundColor: "#a99764"
                            }
                        }}>参加する</Button>
                    </center>
                </Stack>
            </Box>
        </>
    )
}

export default ConstestPage