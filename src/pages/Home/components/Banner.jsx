import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components';

const S = {
  Wrapper: styled.section`
    width: 100%;
    padding: 120px 0;
    background-color: ${props => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
    text-align: center;
  `,
};

const Banner = () => (
  <S.Wrapper>
    <S.Label>Get Started</S.Label>
    <S.Title>
      Etiam erat velit
      <br />
      scelerisque in dictum
    </S.Title>
    <Button fill="solid" type="button">
      Get a Quote
    </Button>
  </S.Wrapper>
);

export default Banner;
