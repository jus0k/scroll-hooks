import React from 'react';
import styled from 'styled-components';

const S = {
  Field: styled.input`
    ${props => props.theme.typography.caption};
    border: 1px solid ${props => props.theme.palette.lightgray};
    width: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    :focus {
      outline: none;
      border: 1px solid ${props => props.theme.palette.secondary};
    }
    ::placeholder {
      color: ${props => props.theme.palette.gray};
    }
  `,
};

const TextField = props => <S.Field {...props} />;

export default TextField;
