import React, {useState} from "react";
import {ThemeProvider} from "@mui/system";
import theme from "../fixtures/theme";
import ContestHeader from "../component/ContestHeader";
import {FormControl, Select, SelectChangeEvent, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import KaTeX from "../component/KaTeX";
import Box from "@mui/material/Box";
import languages from "../fixtures/languages";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {SxProps} from "@mui/system";

const Problem: React.FC = () => {
    const problems = [
        {
            title: "A問題",
            description: "A問題",
        },
        {
            title: "B問題",
            description: "B問題",
        },
        {
            title: "C問題",
            description: "C問題",
        },
        {
            title: "D問題",
            description: "D問題",
        }
    ]
    const [selected, setSelected] = React.useState(problems[0].title);
    const handleChange = (event: SelectChangeEvent) => {
        setSelected(event.target.value as string);
    };
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("C(GCC)");


    return (
        <ThemeProvider theme={theme}>
            <ContestHeader selected={"problem"}/>
            <main style={{display: "flex", justifyContent: "center"}}>
                <Box style={{
                    width: "50%",
                    display: "block",
                    justifyContent: "center",
                }}>
                    <center>
                        {/* ここで問題を選択する */}
                        <FormControl variant="standard">
                            <Select
                                value={selected}
                                label="問題"
                                onChange={handleChange}
                            >
                                {problems.map((problem) => (
                                    <MenuItem value={problem.title}>{problem.title}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </center>
                     {/*ここで問題の内容を表示する KaTeXを使う*/}
                    <KaTeX description={
                        selected === problems[0].title ? problems[0].description :
                            selected === problems[1].title ? problems[1].description :
                                selected === problems[2].title ? problems[2].description :
                                    problems[3].description
                    }/>
                </Box>
                 {/*入力フォーム*/}
                <Box sx={{
                    width: "50%",
                    height: "100%",
                    display: "block",
                    backgroundColor: "#282C34",
                    color: "#fff",
                    autoComplete: "off",
                    border: "1px solid #282C34",
                }}>
                    <TextField
                        multiline
                        rows={"30"}
                        variant="filled"
                        sx={{
                            fontWeight: "bold",
                            width: "95%",
                            height: "90%",
                            "& .MuiInputBase-input": {
                                color: "#fff",
                            },
                        }}
                    />
                     {/*右下のフォーム*/}
                    <Box sx={{
                        width: "100%",
                        height: "4rem",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}>
                         {/* 言語選択 */}
                        <FormControl>
                            <Select
                                value={language}
                                onChange={handleChange}
                            >
                                {languages.map((language) => (
                                    <MenuItem value={language}>{language}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                         {/*提出するボタン*/}
                        <Link to={"/1/result"} style={{textDecoration: "none", color: "#fff"}}>
                            <Button variant="contained" sx={{
                                backgroundColor: "#FFD700",
                                color: "#000",
                                "&:hover": {
                                    backgroundColor: "#FFD700",
                                }
                            }}>提出</Button>
                        </Link>
                    </Box>
                </Box>
            </main>
        </ThemeProvider>
    );
};

export default Problem;