import React from 'react';
import ContestHeader from "../components/ContestHeader";
import KaTeXComponnet from "../components/KaTeXComponnet";

const markdown = `
# これはでもだよ～．
$\\sqrt{3x-1}+(1+x)^2$
`;
export const ContestTop: React.FC = () => {
    return (
        <>
            <ContestHeader page="top"/>
            <KaTeXComponnet description={markdown}/>
        </>
    )
}