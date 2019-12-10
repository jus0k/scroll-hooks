import React from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.button`
    width: fit-content;
    ${props => props.theme.typography.button};
    background-color: ${props => props.theme.palette.primary};
    color: #fff;
    padding: 1rem 2rem;
    border: 0;
    outline: none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `,
};

const Button = props => <S.Button {...props} />;

export default Button;
