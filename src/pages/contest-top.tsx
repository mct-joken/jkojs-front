import React from 'react';
import ContestHeader from "../components/ContestHeader";
import KaTeXComponnet from "../components/KaTeXComponnet";

const markdown = ``;
export const ContestTop: React.FC = () => {
    return (
        <>
            <ContestHeader page="top"/>
            <KaTeXComponnet description={markdown}/>
        </>
    )
}