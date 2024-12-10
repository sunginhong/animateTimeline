import React from "react";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const TabItem: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <button {...props} 
            style={{
                color: "#000",
                width: "200px",
                height: "50px",
                float: "left",
                border: "0",
                backgroundColor: "transparent"
            }}
            onClick={onClick}
            >
            {children}
        </button>
    );
};

export default TabItem;

