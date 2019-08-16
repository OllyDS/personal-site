import * as React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import { Cell, Container, Grid } from "../../atoms/Grid";

const SImageContainer = styled.div`
  margin: auto;
`;

const SText = styled.h1`
  display: none;
`;

const SContainer = styled.div`
  background-image: url(/images/mimapp.png);
  background-origin: content-box, padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.3);
  display: flex;
  height: 400px;
  margin: auto;
  position: relative;
  max-width: 900px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 639px) {
    display: none
  }

  &:hover {
    transform: scale(1.05);
    ${SText} {
      color: #FFFFFF;
      display: flex;
      font-size: 6rem;
      font-weight: bold;
      justify-content: center;
      text-align: center;
      text-shadow: 0 0 20px black;
    }

    @media (max-width: 639px) {
      display: none
    }
  }
`;

const SCell = styled(Cell)`
  display: flex;
`;

const SMobileImage = styled.img`
  height: 100px
  max-width: 100px;

  @media(min-width: 640px) {
    display: none;
  }
`;

const SMobileText = styled.h1`
  align-items: center;
  color: #1B1C1D;
  display: flex;
  font-size: 32px;
  justify-content: center;
  margin: auto;
  position: relative;
  text-align: center;

  @media (min-width: 640px) {
    display: none;
  }
`;



const Mimapp = () => (
  <Link to="/personal-projects/#mimapp">
    <SContainer>
      <SImageContainer>
        <SText>mimapp</SText>
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