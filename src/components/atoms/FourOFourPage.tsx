import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const SImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  justify-content: center;
`;

const SImage = styled.img`
  box-shadow: 1px 2px 8px 0 rgba(34, 34, 34, 0.3);
`;

const SLink = styled(Link)`
  border: 1px solid grey;
  border-radius: 40px;
  box-shadow: 1px 2px 8px 0 rgba(34, 34, 34, 0.3);
  color: #1B1C1D;
  display: flex;
  margin: 20px;
  padding: 10px;
`;

const FourOFourPage = () => (
  <>
    <SImageWrapper>
      <SImage src="/images/404.jpg" />
      <SLink to="/#top">
        Return Home
      </SLink>
    </SImageWrapper>
  </>
);

export default FourOFourPage;