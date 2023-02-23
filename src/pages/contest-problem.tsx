import React from 'react';
import ContestHeader from "../components/ContestHeader";
import Problem from "../components/problem";

const A :string = "" +
    "# A 足し算\n" +
    "整数aとbが与えられます\n" +
    "a+bの計算結果を出力してください\n" +
    "## 例\n" +
    "#### 入力例\n" +
    "3 5\n" +
    "#### 出力例\n" +
    "8"

const B :string = ""+
    "# B 引き算\n" +
    "整数aとbが与えられます\n" +
    "a+bの計算結果を出力してください\n" +
    "## 例\n" +
    "#### 入力例\n" +
    "3 5\n" +
    "#### 出力例\n" +
    "8"
const C :string = ""+
    "# C 掛け算\n" +
    "整数aとbが与えられます\n" +
    "a+bの計算結果を出力してください\n" +
    "## 例\n" +
    "#### 入力例\n" +
    "3 5\n" +
    "#### 出力例\n" +
    "8"
const D :string = ""+
    "# D 除算\n" +
    "整数aとbが与えられます\n" +
    "a+bの計算結果を出力してください\n" +
    "## 例\n" +
    "#### 入力例\n" +
    "3 5\n" +
    "#### 出力例\n" +
    "8"

export const ContestProblem: React.FC = () => {
    return (
        <>
            <ContestHeader page="problem"/>
            <Problem problemA={A}
            problemB={B}
            problemC={C}
            problemD={D}/>
        </>
    )
}