import Hero from '../components/Hero';
import React from 'react';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import { ContentMarginX, Panarama } from '../styles/utils';
import Tag from '../components/Tag';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import ReactHtmlParser from 'react-html-parser';
import { getHomepage } from '../lib/content';
import Thumbnail from '../components/Thumbnail';

const TagGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  >* {
    margin-right: .6rem;
    margin-bottom: .6rem;
  }
`;
const LatestWork_A = styled.div``;
const LatestWork_B = styled.div`
  margin: 0;
  > p {
    margin-top: 1rem;
  }
`;
const ThumbnailWrap = styled.div``;
const Project = styled.section`
  ${ContentMarginX};
  margin-top: 12rem;
  margin-bottom: 12rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;
  
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-column-gap: 4rem;
    grid-row-gap: 0;
    
    ${ThumbnailWrap} {
      grid-row: 1/3;
      grid-column: 2/3;
      align-self: center;
    }
    
    ${LatestWork_A} {
      grid-row: 1/2;
      grid-column: 1/2;
    }    
    ${LatestWork_B} {
      grid-row: 2/4;
      grid-column: 1/2;
    }
  }
`;
const WhatIDo = styled.section`
  ${ContentMarginX};
  margin-top: 10rem;
  margin-bottom: 8rem;
  h1 {
    transform: translateX(-6px);
    margin-bottom: 4rem;
  }
  
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {
      transform: none;
      grid-column: 1/2;
    }
  }
`;

export default function Homepage({ hero, whatIDo, footer, projects }) {
  const router = useRouter();
  return (
    <>
      <Hero>
        {ReactHtmlParser(hero.html)}
        <CtaButton onClick={() => router.push('/first-page')}/>
      </Hero>

      {
        projects.map(({ id, title, html, tags, preview }) => (
          <Project key={id}>
            <LatestWork_A>
              <Panarama>latest work</Panarama>
              <h1>{title}</h1>
              <TagGroup>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagGroup>
            </LatestWork_A>
            <ThumbnailWrap>
              <Thumbnail image={preview}/>
            </ThumbnailWrap>

            <LatestWork_B>
              {ReactHtmlParser(html)}
              <CtaButton onClick={() => router.push('/first-page')}/>
            </LatestWork_B>
          </Project>))
      }

      <WhatIDo>
        <h1>What I <strong>Do</strong></h1>
        <div>
          {ReactHtmlParser(whatIDo.html)}
        </div>
      </WhatIDo>
      <Footer>
        {ReactHtmlParser(footer.html)}
      </Footer>
    </>
  );
};

export async function getStaticProps() {
  const { hero, whatIDo, footer, projects } = await getHomepage();
  return {
    props: {
      hero, whatIDo, footer, projects,
    },
  };
}

