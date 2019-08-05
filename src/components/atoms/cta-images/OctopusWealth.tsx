import * as React from "react";
import styled, { css } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import { Cell, Container, Grid } from "../Grid";

const SImageContainer = styled.div`
  display: none;
  margin: auto;
`;

const SContainer = styled.div`
  background-image: url(/images/OctopusWealth.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  height: 300px;
  margin: auto;
  position: relative;
  width: 900px;

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
  width: 100px;

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

const OctopusWealth = () => (
  <Link to="/projects/octopus-wealth/#top">
    <SContainer>
      <SImageContainer>
        <SText className="text">Octopus Wealth</SText>
      </SImageContainer>
    </SContainer>
    <Container>
      <Grid>
        <SCell width={5}>
          <SMobileImage src="/images/icons/octopus.png" />
        </SCell>
        <SCell width={7}>
          <SMobileText>Octopus Wealth</SMobileText>
        </SCell>
      </Grid>
    </Container>
  </Link>
);

export default OctopusWealth;