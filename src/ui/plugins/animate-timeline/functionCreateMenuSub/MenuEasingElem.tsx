import React from 'react';

interface ButtonProps {
    label: string;
    color: string;
    onClick: () => void;
}

const EasingButton: React.FC<ButtonProps> = ({ label, color, onClick }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        border: 'none',
        color: '#424242',
        cursor: 'pointer',
        textAlign: "center" as const,
        fontFamily: "Pretendard Variable",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "16px",
        display: "flex",
        padding: "2px 8px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        borderRadius: '4px',
    };

    return (
        <button className={"easing-button " + label} style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default EasingButton;