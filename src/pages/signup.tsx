import React from "react";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const Signup: React.FC = () => {
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
            />
            <TextField
              label={"メールアドレス"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
            />
            <TextField
              label={"パスワード(8文字以上)"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              type={"password"}
            />
            <TextField
              label={"パスワード(確認用)"}
              sx={{
                m: 2,
                backgroundColor: "white",
              }}
              variant={"outlined"}
              type={"password"}
            />
            <Typography variant={"body2"} sx={{ m: 2 }}>
              <Link to={"/"}>利用規約</Link>
              を読んだ上でアカウントを作成してください.
            </Typography>
          </Container>
          <Link to={"/"}>
            <Button
              sx={{
                m: 2,
                color: "white",
                borderRadius: "0.3rem",
                backgroundColor: "#2331AE",
                ":hover": {
                  backgroundColor: "#2331AE",
                },
              }}
            >
              アカウント作成
            </Button>
          </Link>
        </Box>
      </center>
    </ThemeProvider>
  );
};
export default Signup;
