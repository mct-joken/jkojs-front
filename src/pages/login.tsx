import React, { memo } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

// eslint-disable-next-line react/display-name
export const Login: React.FC = memo(() => {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const onClickLogin = async () => {
    const authStatus = await axios
      .post("http://localhost:3080/api/v1/login", {
        config,
        name: userName,
        password: password,
      })
      .then((response) => {
        navigate("/");
        window.location.reload();
        localStorage.setItem("token", response.data.token);
      })
      .catch(() => {
        navigate("/login");
        localStorage.removeItem("token");
        alert("名前かパスワードが間違っています");
      });
    console.log("authStatus", authStatus);
  };

  return (
    <ThemeProvider theme={theme}>
      <center>
        <Box
          sx={{
            minWidth: "100px",
            maxWidth: "600px",
            borderRadius: "10px",
            backgroundColor: "#F1F1F1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Typography variant={"h4"} sx={{ m: 2 }}>
            ログイン
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              label={"ユーザー名"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              onChange={(e) => {
                setUserName(e.target.value as string);
              }}
            />
            <TextField
              label={"パスワード"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              type={"password"}
              onChange={(e) => {
                setPassword(e.target.value as string);
              }}
            />
            <Typography variant={"body2"} sx={{ m: 2 }}>
              アカウントがありませんか？
              <Link to={"/signup"}>アカントを作成</Link>
            </Typography>
          </Container>
          <center>
            <Button
              sx={{
                m: 2,
                color: "white",
                borderRadius: "0.3rem",
                width: "6rem",
                backgroundColor: "#2331AE",
                ":hover": {
                  backgroundColor: "#2331AE",
                },
              }}
              variant={"contained"}
              onClick={onClickLogin}
            >
              ログイン
            </Button>
          </center>
        </Box>
      </center>
    </ThemeProvider>
  );
});
