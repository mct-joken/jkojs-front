import React from 'react';
import ContestHeader from "../components/ContestHeader";
import ContestDescription from "../components/ContestDescription";

const markdown = ``;
export const ContestTop: React.FC = () => {
    return (
        <>
            <ContestHeader page="top"/>
            <ContestDescription description={markdown}/>
        </>
    )
}