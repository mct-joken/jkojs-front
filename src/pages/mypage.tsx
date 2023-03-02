import React from "react";
import theme from "../fixtures/theme";
import {ThemeProvider} from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Deleteuser from "../component/Deleteuser";

const Mypage: React.FC = () => {
    const userData={
        name:"none",
        email:"none@email.com",
    }
    return(
        <ThemeProvider theme={theme}>
        <main>
            <center>
                {/*アカウントアバター*/}
                    <Avatar
                        alt=""
                        src=""
                        sx={{width: "10rem",height:"10rem",marginTop:"5rem"}}
                    />
                {/*名前*/}
                    <Typography variant={"h4"} sx={{
                        mt:3,
                        justifyContent:"centor",
                        fontWeight:"bold",
                        marginBottom:"3rem"
                    }}>{userData.name}</Typography>
                {/*Eメール*/}
                <Typography variant={"h6"} sx={{
                    mt:3,
                    justifyContent:"centor",
                    fontWeight:"semibold",
                    marginBottom:"4rem"
                }}>{userData.email}</Typography>
                {/*アカウント削除*/}
                <Deleteuser/>
            </center>
        </main>
        </ThemeProvider>
    )
}
export default Mypage