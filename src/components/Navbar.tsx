import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled, { css } from "styled-components";

import { Container } from "../components/atoms/Grid";
import HamburgerIcon from "../components/atoms/HamburgerIcon";

interface IStyleProps {
  topOfPage: boolean;
}

const styledNav = css`
  background-color: #1B1C1D;
  display: flex;
  height: 60px;
  justify-content: stretch;
  position: sticky;
  top: 0;
  transition: all 0.25s ease;
  width: 100%;
  z-index: 1000;
`;

const SNav = styled.nav<IStyleProps>`
  ${styledNav}

  ${props => !props.topOfPage && css`
    box-shadow: 0 0 10px rgba(34, 34, 34, 1);
  `}

  @media (max-width: 639px) {
    display: none
  }
`;

const SContainer = styled(Container)`
  display: flex;

  @media(min-width: 640px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const styledNavLink = css`
  display: flex;
  float: right;
  text-align: center;
`;

const SNavLeft = styled.div`
  ${styledNavLink};
  width: 100%;
`;

const SNavRight = styled.div`
  ${styledNavLink};
`;

const styledLink = css`
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-family: 'Roboto' sans-serif;
  min-width: 20px

  &:hover {
    color: grey;
  }
`;

const SLinkLeft = styled(Link)`
  ${styledLink};
`;

const SLinkRight = styled(Link)`
  ${styledLink};
  padding-left: 25px;
`;


const SSmallNav = styled.nav<IStyleProps>`
  ${styledNav}

  ${props => !props.topOfPage && css`
    box-shadow: 0 0 10px rgba(34, 34, 34, 1);
  `}

  @media (min-width: 639px) {
    display: none
  }
`;

const SSmallLink = styled(Link)`
  color: #1B1C1D;
`;

const SHamburgerLinks = styled.ul`
  background-color: #FFFFFF
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SLinkItem = styled.li`
  display: flex;
  border-bottom: 1px solid grey;
  flex-direction: column;
  padding: 2rem;
`;

interface IMenuProps {
  isOpen: boolean;
}

const SSideBarMenu = styled.div<IMenuProps>`
  align-items: stretch;
  background-color: #FFFFFF;
  bottom: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 80%;
  position: fixed;
  left: 0px;
  top: 60px;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  width: 300px;
  z-index: 200;

  ${props =>
    props.isOpen &&
    css`
      box-shadow: 0 0 30px 0 rgba(34, 34, 34, 0.3);
      transform: translateX(0%);
    `};
  };
`;


const Navbar = () => {
  const [topOfPage, setTopOfPage] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    scrollPosition();
    window.addEventListener("scroll", scrollPosition);

    return () => window.removeEventListener("scroll", scrollPosition);
  }, []);

  const toggleSideBar = () => setIsOpen(!isOpen);

  const scrollPosition = () => {
    if (window.scrollY > 20) {
      setTopOfPage(false)
    } else {
      setTopOfPage(true)
    }
  }

  return (
    <>
      <SNav topOfPage={topOfPage}>
        <SContainer>
          <SNavLeft>
            <SLinkLeft to="/#top">OLIVER DE SOUSA</SLinkLeft>
          </SNavLeft>
          <SNavRight>
            <SLinkRight to="/cv/#top">CV</SLinkRight>
            <SLinkRight to="/contact/#top">CONTACT</SLinkRight>
          </SNavRight>
        </SContainer>
      </SNav>
      <SSmallNav topOfPage={topOfPage}>
        <HamburgerIcon active={isOpen} onClick={toggleSideBar} />
      </SSmallNav>
      <SSideBarMenu isOpen={isOpen}>
        <SSmallLink to="/#top" onClick={toggleSideBar}>
          <SHamburgerLinks>
            <SLinkItem>Home</SLinkItem>
          </SHamburgerLinks>
        </SSmallLink>
        <SSmallLink to="/octopus-wealth/#top" onClick={toggleSideBar}>
          <SHamburgerLinks>
            <SLinkItem>Professional Projects</SLinkItem>
          </SHamburgerLinks>
        </SSmallLink>
        <SSmallLink to="/personal-projects/#top" onClick={toggleSideBar}>
          <SHamburgerLinks>
            <SLinkItem>Personal Projects</SLinkItem>
          </SHamburgerLinks>
        </SSmallLink>
        <SSmallLink to="/cv/#top" onClick={toggleSideBar}>
          <SHamburgerLinks>
            <SLinkItem>CV</SLinkItem>
          </SHamburgerLinks>
        </SSmallLink>
        <SSmallLink to="/contact/#top" onClick={toggleSideBar}>
          <SHamburgerLinks>
            <SLinkItem>Contact</SLinkItem>
          </SHamburgerLinks>
        </SSmallLink>
      </SSideBarMenu>
    </>
  );
};

export default Navbar;