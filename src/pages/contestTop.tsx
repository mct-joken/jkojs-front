import React from "react";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";
import KaTeX from "../component/KaTeX";
import ContestHeader from "../component/ContestHeader";

const ContestTop: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <center>
        <ContestHeader selected="トップ" />
        <KaTeX
          description={
            "このコンテストは、競技プログラミング初心者向けの練習用コンテストです。\nプログラミングの基礎的な知識を身につけたい方には、このコンテストへの挑戦をお勧めします。\n競技プログラミングに必要な、基本的な入力出力、四則演算、繰り返しや条件分岐などの知識が必要です。"
          }
        />
      </center>
    </ThemeProvider>
  );
};

export default ContestTop;
