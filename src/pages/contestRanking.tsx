import React from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../fixtures/theme";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ContestHeader } from "../component/ContestHeader";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
function createData(
  rank: number,
  name: string,
  A: boolean,
  B: boolean,
  C: boolean,
  D: boolean,
  score: number
) {
  return { rank, name, A, B, C, D, score };
}

const data = [
  createData(1, "A", true, true, true, true, 100),
  createData(2, "B", true, true, true, true, 100),
  createData(3, "C", true, true, true, true, 100),
  createData(4, "D", false, false, false, false, 100),
];
const contestData = {
  A問題: "足し算",
  B問題: "引き算",
  C問題: "掛け算",
  D問題: "割り算",
};
export const ContestRanking: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContestHeader selected={"ranking"} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          {/* ヘッダー */}
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={"body2"}>順位</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>名前</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>{contestData.A問題}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>{contestData.B問題}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>{contestData.C問題}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>{contestData.D問題}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={"body2"}>得点</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Typography variant={"body2"}>{row.rank}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant={"body2"}>{row.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  {row.A ? <DoneIcon /> : <HorizontalRuleIcon />}
                </TableCell>
                <TableCell align="center">
                  {row.B ? <DoneIcon /> : <HorizontalRuleIcon />}
                </TableCell>
                <TableCell align="center">
                  {row.C ? <DoneIcon /> : <HorizontalRuleIcon />}
                </TableCell>
                <TableCell align="center">
                  {row.D ? <DoneIcon /> : <HorizontalRuleIcon />}
                </TableCell>
                <TableCell align="center">
                  <Typography variant={"body2"}>{row.score}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant={"body2"}>This page is work in progress.</Typography>
    </ThemeProvider>
  );
};
