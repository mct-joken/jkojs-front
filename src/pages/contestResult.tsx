import React from "react";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";
import ContestHeader from "../component/ContestHeader";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemoryIcon from "@mui/icons-material/Memory";
import SpeedIcon from "@mui/icons-material/Speed";

{
  /*テスト用のデータ*/
}
function createData(
  title: string,
  memory: string,
  time: string,
  language: string,
  status: string
) {
  return { title, memory, time, language, status };
}
const rows = [
  createData("A問題", "100", "100", "C(GCC)", "AC"),
  createData("B問題", "100", "100", "C(GCC)", "AC"),
  createData("C問題", "100", "100", "C(GCC)", "AC"),
  createData("D問題", "100", "100", "C(GCC)", "AC"),
];
const ContestResult: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContestHeader selected="result" />
        <center>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {/*ヘッダー行*/}
              <TableHead>
                <TableRow>
                  <TableCell align={"center"}>
                    <Typography variant={"body2"}>提出した問題</Typography>
                  </TableCell>
                  <TableCell align={"center"}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <MemoryIcon />
                      <Typography variant={"body2"}>メモリ使用量</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align={"center"}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <SpeedIcon />
                      <Typography variant={"body2"}>実行時間</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align={"center"}>
                    <Typography variant={"body2"}>言語</Typography>
                  </TableCell>
                  <TableCell align={"center"}>
                    <Typography variant={"body2"}>提出結果</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/*本体行*/}
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align={"center"}>
                      {row.title}
                    </TableCell>
                    <TableCell align={"center"}>{row.memory}kB</TableCell>
                    <TableCell align={"center"}>{row.time}ms</TableCell>
                    <TableCell align={"center"}>{row.language}</TableCell>
                    <TableCell align={"center"}>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </center>
      </ThemeProvider>
    </>
  );
};
export default ContestResult;
