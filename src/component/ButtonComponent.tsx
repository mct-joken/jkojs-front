import React from "react";
interface Props {
    text: string;
    onClick: () => void;
    backgroundcolor?: string;
    color?: string;
    radius?: string;
}

const ButtonComponent: React.FC<Props> = (props) => {
    return (
        <button
            style={{
                backgroundColor: props.backgroundcolor,
                color: props.color,
                borderRadius: props.radius,
            }}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default ButtonComponent;