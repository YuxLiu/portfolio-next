import React from 'react';
import Header from '../Header';
import ScrollPrompt from '../ScrollPrompt';

import styled from 'styled-components';
import { ContentMarginX } from '../../styles/utils';

const Content = styled.section`
  ${ContentMarginX};
  
  h1 {
    margin-bottom: 1.5rem;
    width: 80%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  
  p {
    margin-bottom: 6rem;
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  margin-top: 2rem;
  margin-bottom: 6rem;
`;

const PromptWrap = styled.div``;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  overflow: visible;
  border: white 1rem solid;
  min-height: 100vh;
    
  position: relative;
  
  display: grid;
  grid-template-rows: .2fr .6fr .2fr;
  
  ${PromptWrap} {
    position: absolute;
    bottom: -1rem;
    right: 10%;
  }
  
  @media (max-width: 960px) {
    min-height: 50rem;
  }
`;

const Hero = ({ children }) => {
  return (
    <Container>
      <Header/>
      <Content>{children}</Content>
      <PromptWrap><ScrollPrompt/></PromptWrap>
    </Container>
  );
};

export default Hero;
