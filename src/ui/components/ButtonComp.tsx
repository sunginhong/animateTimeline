import React from "react";
import styled from "styled-components";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const ButtonComp: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <ButtonStyles {...props} onClick={onClick}>
            {children}
        </ButtonStyles>
    );
};

export default ButtonComp;

const ButtonStyles = styled.button`
  color: #000;
  font-size: 16px;
  background-color: "#efefef";
`;
