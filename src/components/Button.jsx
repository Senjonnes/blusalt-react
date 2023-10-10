import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
    return (
        <ButtonStyle onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

const ButtonStyle = styled.button`
    width: 6rem;
    font-weight: bold;
    font-size: 18px;
    padding: 4px;
    border-radius: 8px;
    outline: none;
    border: none;
    background: #008001;
    color: #ffffff;
`

export default Button;