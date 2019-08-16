import * as React from "react";
import styled, { css } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import { Cell, Container, Grid } from "../../atoms/Grid";

const SImageContainer = styled.div`
  display: none;
  margin: auto;
`;

const SContainer = styled.div`
  background-image: url(/images/OctopusWealth.png);
  background-origin: content-box, padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.3);
  display: flex;
  height: 300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  position: relative;
  max-width: 900px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 639px) {
    display: none
  }

  &:hover {
    transform: scale(1.05);

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

const OctopusWealth = () => (
  <Link to="/octopus-wealth/#top">
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