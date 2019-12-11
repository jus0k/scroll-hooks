import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextField from './TextField';

const S = {
  Wrapper: styled.footer`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Info: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
  `,
  Logo: styled.span`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.darkgray};
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  Text: styled.p`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    span {
      display: block;
      margin-bottom: 1.5rem;
    }
  `,
  Menu: styled.ul`
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled.h4`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.secondary};
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled.a`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    display: inline-block;
    margin-bottom: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  Subscribe: styled.div`
    flex: 0 0 30%;
    max-width: 30%;
    p {
      line-height: 1.5;
    }
  `,
  Form: styled.form`
    input {
      width: 60%;
    }
    margin-bottom: 1rem;
  `,
  Bottom: styled.div`
    width: 100%;
    color: ${props => props.theme.palette.gray};
    margin-top: 120px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.palette.lightgray};
    span {
      ${props => props.theme.typography.caption};
    }
  `,
};

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.Logo>Lorem</S.Logo>
      <S.Text>
        <span>hello@lorem.com</span>
        <span>+10 1234 5678</span>
        <span>600/D, Mashup road, Korea</span>
      </S.Text>
    </S.Info>
    <S.Menu>
      <S.MenuTitle>Quick Links</S.MenuTitle>
      <S.MenuItem>About Us</S.MenuItem>
      <S.MenuItem>Serivces</S.MenuItem>
      <S.MenuItem>Contact Us</S.MenuItem>
    </S.Menu>
    <S.Menu>
      <S.MenuTitle>Services</S.MenuTitle>
      <S.MenuItem>Features</S.MenuItem>
      <S.MenuItem>Price</S.MenuItem>
      <S.MenuItem>Frequently Ask</S.MenuItem>
    </S.Menu>
    <S.Subscribe>
      <S.MenuTitle>Subscribe</S.MenuTitle>
      <S.Form>
        <TextField type="text" placeholder="Enter Your Email" />
        <Button fill="solid" type="submit">
          Subscribe
        </Button>
      </S.Form>
      <S.Text>
        Et magnis dis parturient montes nascetur. Est placerat in egestas erat
        imperdiet.{' '}
      </S.Text>
    </S.Subscribe>
    <S.Bottom>
      <span>Lorem © 2019</span>
    </S.Bottom>
  </S.Wrapper>
);

export default Footer;
