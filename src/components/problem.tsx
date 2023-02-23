import React from "react";
import {
    Button,
    ClickAwayListener,
    FormControl,
    InputLabel,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import KaTeXComponnet from "./KaTeXComponnet";
import Typography from "@mui/material/Typography";
import CodeField from "./CodeForm";
interface Props {
    problemA: string,
    problemB: string,
    problemC: string,
    problemD: string,
}
const languages = [
    "C言語(gcc)",
    "C言語(clang)",
    "Ruby",
    "Java",
    "Go",
    "JavaScript",
    "TypeScript",
    "Crystal",
    "Python"
];
const current = {
    width: "25%",
    height: "2.5rem",
    backgroundColor: "#D7FFD0",
    borderRadius: "0 0 0 0",
}
const normal = {
    height: "2.5rem",
    width: "25%",
    backgroundColor: "#D9D9D9",
    borderRadius: "0 0 0 0",
}
const Problem: React.FC<Props> = ({problemA,problemB,problemC, problemD}) => {
    const [select, setSelect] = React.useState("A");
    const [lang, setLang] = React.useState("");
    const handleselectChange = (selection: string) => {
        setSelect(selection);
    }
    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };
    console.log(select);
    return (
        <center>
            <Box
                sx={{
                    marginTop: "2rem",
                    backgroundColor: "#D7FFD0",
                    width: "100%",
                    height: "auto",
                    borderRadius: "25px",
                }}
            >
                <section>
                    <ClickAwayListener onClickAway={()=>setSelect("A")}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%"}}>
                            <Button onClick={() => handleselectChange("A")} sx={select==="A" ?
                                {width: "25%", backgroundColor: "#D7FFD0", borderRadius: "20px 0 0 0"} :
                                {width: "25%", backgroundColor: "#D9D9D9", borderRadius: "20px 0 0 0", ":hover":{backgroundColor:"#D9D9D9"}}
                            }>A</Button>
                            <Button onClick={() => handleselectChange("B")} sx={select==="B" ? current : normal}>B</Button>
                            <Button onClick={() => handleselectChange("C")} sx={select==="C" ? current : normal}>C</Button>
                            <Button onClick={() => handleselectChange("D")}
                                    sx={select==="D"?
                                        {width: "25%", backgroundColor: "#D7FFD0", borderRadius: "0 20px 0 0"} :
                                        {width: "25%", backgroundColor: "#D9D9D9", borderRadius: "0 20px 0 0", ":hover":{backgroundColor:"#D9D9D9"}}
                                    }>D</Button>
                        </Box>
                    </ClickAwayListener>
                </section>
                <section>
                    <KaTeXComponnet description={
                        select==="A"
                            ? problemA
                            :select==="B"
                                ? problemB
                                :select==="C"
                                    ? problemC
                                    : problemD
                    }/>
                </section>
                <Box sx={{
                    backgroundColor: "#7CB872",
                    height: "0.2rem",
                    width: "90%",
                    margin: "2rem",
                }}>
                </Box>
                <section>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Typography variant={"h5"} sx={{margin: "0.5rem"}}>提出言語</Typography>
                        <FormControl sx={{
                            width: "9rem",
                            margin: "0.5rem",
                        }}>
                            <Select
                                value={lang}
                                onChange={handleChange}
                                sx={{backgroundColor: "#fff"}}
                            >
                                {languages.map((language) => (
                                    <MenuItem value={language}>{language}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <CodeField aria-label="Demo input" multiline placeholder="プログラムを入力してください" />
                    <Button variant="contained" disableElevation sx={{
                        margin: "1rem",
                        backgroundColor: "#F5DFA5",
                        borderRadius: "20px",
                        width: "7rem",
                        height: "3rem",
                        color: "#000",
                        textDecoration: "none",
                        ":hover":{
                            backgroundColor: "#a99764"
                        }
                    }}>提出</Button>
                </section>
            </Box>
        </center>
    )
}
export default Problem;