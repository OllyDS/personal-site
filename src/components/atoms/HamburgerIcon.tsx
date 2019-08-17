import * as React from "react";
import styled, { css } from "styled-components";

interface IHamburgerProps {
  active: boolean;
  className?: string;
  onClick: () => void;
}

const SHamburger = styled.div`
  align-items: center;
  display: flex;
  outline:none;
  padding-left: 25px;
  padding-right: 25px;
  user-select: none;
`;

const SHamburgerInner = styled.button`
  align-items: stretch;
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  outline:none;
  padding: 0;
  width: 24px;
`;

const SLine = styled.div<IHamburgerProps>`
  background-color: #FFFFFF;
  border-radius: 2px;
  height: 2px;
  outline:none;
`;

interface IProps {
  active: boolean;
  className?: string;
  onClick: () => void;
}

const HamburgerIcon = ({ active, className, onClick}: IProps) => (
  <SHamburger className={className} onClick={onClick}>
    <SHamburgerInner>
      <SLine active={active} onClick={onClick} />
      <SLine active={active} onClick={onClick} />
      <SLine active={active} onClick={onClick} />
    </SHamburgerInner>
  </SHamburger>
);

export default HamburgerIcon;