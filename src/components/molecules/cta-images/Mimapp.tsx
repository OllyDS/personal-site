import * as React from "react";
import styled, { css } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import { Cell, Container, Grid } from "../../atoms/Grid";

const SImageContainer = styled.div`
  display: none;
  margin: auto;
`;

const SContainer = styled.div`
  background-image: url(/images/mimapp.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 450px;
  margin: auto;
  position: relative;
  max-width: 900px;

  @media (max-width: 639px) {
    display: none
  }

  &:hover ${SImageContainer} {
    background-color: #000000;
    display: flex;
    height: 100%;
    margin: auto;
    opacity: 0.8;
    position: absolute;
    width: 100%;

    @media (max-width: 639px) {
      display: none
    }
  }
`;

const textStyling = css`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-size: 50px;
  margin: auto;
  position: relative;
  text-align: center;
`;

const SCell = styled(Cell)`
  display: flex;
`;

const SText = styled.h1`
  ${textStyling}
`;

const SMobileImage = styled.img`
  height: 100px
  max-width: 100px;

  @media(min-width: 640px) {
    display: none;
  }
`;

const SMobileText = styled.h1`
  ${textStyling}
  color: #1B1C1D;
  display: flex;
  font-size: 32px;
  justify-content: center
  @media (min-width: 640px) {
    display: none;
  }
`;

const Mimapp = () => (
  <Link to="/personal-projects/#mimapp">
    <SContainer>
      <SImageContainer>
        <SText className="text">mimapp</SText>
      </SImageContainer>
    </SContainer>
    <Container>
      <Grid>
        <SCell width={5}>
          <SMobileImage src="/images/icons/map.png" />
        </SCell>
        <SCell width={7}>
          <SMobileText>mimapp</SMobileText>
        </SCell>
      </Grid>
    </Container>
  </Link>
);

export default Mimapp;