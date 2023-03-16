import React, { memo } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
// eslint-disable-next-line react/display-name
export const Signup: React.FC = memo(() => {
  const [userName, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] =
    React.useState<string>("");

  const navigate = useNavigate();
  const accessToken = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const onClickSignup = async () => {
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      alert("入力されていない項目があります");
      return;
    }
    if (password !== passwordConfirmation) {
      alert("パスワードが一致しません");
      return;
    }
    if (password.length < 8) {
      alert("パスワードは8文字以上で入力してください");
      return;
    }
    const authStatus = await axios
      .post(
        "https://ojs.joken.dev/api/v1/users",
        {
          name: userName,
          email: email,
          password: password,
        },
        accessToken
      )
      .then((response) => {
        navigate("/");
        window.location.reload();
        localStorage.setItem("token", response.data.token);
      })
      .catch(() => {
        navigate("/signup");
        alert(
          "アカウント作成に失敗しました\n同じ名前のアカウントが存在する可能性があります"
        );
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
          <Typography variant={"h4"} sx={{ mt: "2rem", mb: "1rem" }}>
            アカウント作成
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
              label={"メールアドレス"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              onChange={(e) => {
                setEmail(e.target.value as string);
              }}
            />
            <TextField
              label={"パスワード(8文字以上)"}
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
            <TextField
              label={"パスワード(確認用)"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              type={"password"}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value as string);
              }}
            />
            <Typography variant={"body2"} sx={{ m: 2 }}>
              <Link to={"/"}>利用規約</Link>
              を読んだ上でアカウントを作成してください.
            </Typography>
          </Container>
          <center>
            <Button
              sx={{
                m: 2,
                width: "8rem",
                color: "white",
                borderRadius: "0.3rem",
                backgroundColor: "#2331AE",
                ":hover": {
                  backgroundColor: "#2331AE",
                },
              }}
              onClick={onClickSignup}
            >
              アカウント作成
            </Button>
          </center>
        </Box>
      </center>
    </ThemeProvider>
  );
});
