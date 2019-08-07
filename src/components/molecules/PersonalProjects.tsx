import * as React from "react";
import styled from "styled-components";

import { Cell, Container, Grid } from "../../components/atoms/Grid";

const SContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
`;

const SDivider = styled.div`
  border: solid 1px #c0c1c4;
  margin: 12px auto;
  width: 90%;
`;

const SSectionTwo = styled.div`
  margin: 30px;
`;

const SHeaderWrapper = styled.div`
  margin: 20px 0;
  text-align: center;

  @media (max-width: 639px)
  {
    margin-bottom: -10px;
  }
`;

const SHeader = styled.h1`
  color: #343538;
  font-size: 36px;
`;

const SImage = styled.img`
  border-radius: 40px;
  box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  height: 530px;
  padding: 16px;
  width: 270px;

  @media (max-width: 639px)
  {
    margin: 20px 0 5px;
  }
`;

const SText = styled.p`
  padding: 0 10px;
  text-align: center;
`;

const SVideo = styled.iframe`
  display: flex;
  height: 360px;
  width: 645px;

  @media (max-width: 639px)
  {
    height: 100%;
    margin: 20px 0 5px;
    width: 100%;
  }
`;

const PersonalProjects = () => (
  <Container>
    <Grid>
      <Cell width={12}>
        <SHeaderWrapper>
          <SHeader id="mimapp">mimapp</SHeader>
        </SHeaderWrapper>
      </Cell>
      <Cell width={12} mdWidth={4}>
        <SContentWrapper>
          <SImage src="/images/mimapp-search.jpg" />
          <SDivider />
          <SText>"mimapp" is a PWA created using React that utilises various Google APIs.</SText>
        </SContentWrapper>
      </Cell>
      <Cell width={12} mdWidth={4}>
        <SContentWrapper>
          <SImage src="/images/mimapp-places.jpg" />
          <SDivider />
          <SText>Users can search for locations across the globe, with the closest locations appearing first, and add them to their list of favourite places.</SText>
        </SContentWrapper>
      </Cell>
      <Cell width={12} mdWidth={4}>
        <SContentWrapper>
          <SImage src="/images/mimapp-info.jpg" />
          <SDivider />
          <SText>Users would then be able to share their maps with friends.</SText>
        </SContentWrapper>
      </Cell>
      <SSectionTwo />
      <Cell width={12}>
        <SHeaderWrapper>
          <SHeader id="fx-game">FX Trading Game</SHeader>
        </SHeaderWrapper>
      </Cell>
      <Cell width={12} mdWidth={8} mdLeft={3}>
        <SVideo src="https://www.youtube.com/embed/jkf82_QIURA">
        </SVideo>
      </Cell>
      <Cell width={12} mdWidth={8} mdLeft={3}>
        <SDivider />
        <SText>
          The first project I ever built in JavaScript. It used a live FX price feed from a third-party API to stream prices for 4 major FX pairs,
          which players could then buy or sell. At the end, all open positions were flattened and the scores tallied based on their P&amp;L.
        </SText>
      </Cell>
    </Grid>
  </Container>  
);

export default PersonalProjects;