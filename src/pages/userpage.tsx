import React from "react";
import Userbox from "../components/userbox";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
interface Props {
    userName: string,
    userImage: string,
    isme: boolean,
}
const ButtonStyle = {
    borderRadius: "20px",
    border: "2px solid #FF0000",
    color: "#FF0000",
    width: "14rem",
    height: "2rem",
    margin: "0.5rem",
}

const Userpage: React.FC<Props> = ({userName, userImage, isme}) => {
    return (
        <>
            <center>
                <Userbox userImage={userImage} userName={userName}/>
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "space-around",
                }}>
                    {isme &&
                        <div>
                            <Button sx={ButtonStyle}><Typography>パスワードを変更する</Typography></Button>
                            <Button sx={ButtonStyle}><Typography>ログアウト</Typography></Button>
                            <Button sx={ButtonStyle}><Typography>アカウント削除</Typography></Button>
                        </div>
                    }
                </div>
            </center>
        </>
    )
}

export default Userpage;
