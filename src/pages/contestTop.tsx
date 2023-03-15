import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import KaTeX from "../component/KaTeX";
import { ContestHeader } from "../component/ContestHeader";
import axios from "axios";
export const ContestTop: React.FC = () => {
  const pathname: string = window.location.pathname;
  const contestId: string = pathname.split("/")[1];
  const [description, setDescription] = useState<string>("");
  useEffect(() => {
    axios
      .get(`http://localhost:3080/api/v1/contests/${contestId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setDescription(response.data.description);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <center>
        <ContestHeader selected="トップ" />
        <KaTeX
          style={{ width: "80%", maxWidth: "1200px" }}
          description={description}
        />
      </center>
    </ThemeProvider>
  );
};
