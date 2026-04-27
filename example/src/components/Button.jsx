import React from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.button`
    padding: 1rem 2rem;
    border: 0;
    outline: none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: pointer;
    ${props => props.theme.typography.button};
    background-color: ${({ theme, fill }) =>
      fill === 'solid' ? theme.palette.primary : 'transparent'};
    width: fit-content;
    color: ${({ theme, fill }) =>
      fill === 'solid' ? theme.palette.white : theme.palette.primary};
    border: ${({ theme, fill }) =>
      fill === 'solid' ? 'none' : `1px solid ${theme.palette.primary}`};
    &:focus {
      outline: none;
    }
  `,
};

const Button = props => <S.Button {...props} />;

export default Button;
