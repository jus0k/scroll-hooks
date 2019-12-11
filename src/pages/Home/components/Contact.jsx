import React from 'react';
import styled from 'styled-components';

import { Button, TextField } from '../../../components';
import { contactImage } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url(${contactImage});
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const Contact = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };

  return (
    <S.Wrapper>
      <S.Image image={contactImage} />
      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Contact us</S.Label>
        <S.Title {...animatedItem[1]}>
          Est placerat in egestas
          <br />
          erat imperdiet
        </S.Title>
        <S.Description {...animatedItem[2]}>
          Consequat interdum varius sit amet mattis vulputate enim. Sit amet
          nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu.
        </S.Description>
        <S.Form {...animatedItem[3]}>
          <TextField type="text" placeholder="Name" />
          <TextField type="text" placeholder="Work Email Address" />
          <TextField type="text" placeholder="Company Name" />
          <Button fill="solid" type="submit">
            Become a partner
          </Button>
        </S.Form>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Contact;
