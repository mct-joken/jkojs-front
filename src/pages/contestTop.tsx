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
            "# markdown-it-katex \n" +
            "$$\\begin{array}{c}" +
            "" +
            "\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} &" +
            "= \\frac{4\\pi}{c}\\vec{\\mathbf{j}}    \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\" +
            "" +
            "\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\" +
            "" +
            "\\nabla \\cdot \\vec{\\mathbf{B}} & = 0" +
            " " +
            "\\end{array}$$"
          }
        />
      </center>
    </ThemeProvider>
  );
};

export default ContestTop;
