import React from "react";
import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";

const md = new MarkdownIt();
md.use(mk);

interface Props {
    description: string;
}

const KaTeXComponnet: React.FC<Props> = ({ description }) => {
    const text = md.render(description);
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default KaTeXComponnet;