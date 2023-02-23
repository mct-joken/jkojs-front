import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const textfieldStyle = {
    backgroundColor: "#fff",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "10rem",
}
const buttonStyle = {
    backgroundColor: "#F5DFA5",
    borderRadius: "20px",
    color: "#000",
    marginBottom: "1rem",
    maxWidth: "10rem",
    ":hover":{
        backgroundColor: "#f3cc66",
        color: "#000",
    }
}

export const Login:React.FC = () => {
    return (
        <center>
            <Box sx={{
                backgroundColor: "#D7FFD0",
                borderRadius: "20px",
                marginTop: "3rem",
                justifyContent: "center",
                width: "80%",
                minWidth: "300px",
            }}>
                <center>
                    <Typography variant={"h3"} sx={{
                        marginTop: "2rem",
                    }}
                    >ログイン</Typography>
                    <div style={{
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "space-around",
                        width: "13rem",
                        marginBottom: "rem"
                    }}
                    >
                        <TextField
                            required
                            label="名前"
                            type="name"
                            sx={textfieldStyle}
                        />
                        <TextField
                            required
                            label="パスワード"
                            type="password"
                            sx={textfieldStyle}
                        />
                        <Button sx={buttonStyle}>次へ</Button>
                    </div>
                </center>
            </Box>
        </center>
    )
}
