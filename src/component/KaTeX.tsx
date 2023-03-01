import React from "react";
import MarkdownIt from "markdown-it";
import mk from "@traptitech/markdown-it-katex";
const md = new MarkdownIt();
md.use(mk, {"blockClass": "math-block", "errorColor": "#cc0000"});

interface Props {
    description: string;
}

const KaTeX: React.FC<Props> = (props) => {
    const result = md.render(`${props.description}`);
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: result}}/>
        </div>
    );
};

export default KaTeX;