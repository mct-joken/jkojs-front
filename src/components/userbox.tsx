import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
    userImage: string,
    userName: string,
}

const Userbox: React.FC<Props> = ({userImage, userName}) => {
    return (
        <>
            <center>
                <Box sx={{
                    marginTop: "4rem",
                    width: "70%",
                    minWidth: "300px",
                    height: "auto",
                    maxHeight: "60px",
                    minHeight: "150px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#D7FFD0",
                    borderRadius: "20px",
                    alignItems: "center"
                }}>
                    <img src={userImage} alt="userimage" style={{
                        borderRadius: "50%",
                        minHeight: "50px",
                        maxHeight: "100px",
                        aspectRatio: "1/1",
                        backgroundColor: "#fff",
                        border: "3px solid #D9D9D9",
                        marginRight: "4rem",
                    }}/>
                    <Typography variant={"h3"}>{userName}</Typography>
                </Box>
            </center>
        </>
    )
}
export default Userbox;
