import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    color: ${props => props.theme.palette.white};
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;
  `,
  Navigation: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  NavigationItem: styled.span`
    color: ${props => props.theme.palette.white};
    margin: 0 1rem;
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>Logo</S.Logo>
        <S.Navigation>
          {NAVIGATION_ITEMS.map(item => (
            <S.NavigationItem key={item}>{item}</S.NavigationItem>
          ))}
        </S.Navigation>
        <S.ButtonWrapper>
          <Button type="button" style={{ marginLeft: 'auto' }}>
            Get a Quote
          </Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
