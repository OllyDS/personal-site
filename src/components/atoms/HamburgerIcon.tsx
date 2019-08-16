import * as React from "react";
import styled, { css } from "styled-components";

interface IHamburgerProps {
  active: boolean;
  className?: string;
  onClick: () => void;
}

const SHamburger = styled.button`
  align-items: center;
  display: flex;
  margin-left: 14px;
  user-select: none;
`;

const SHamburgerInner = styled.div`
  align-items: stretch;
  background: none;
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 19px;
  justify-content: space-between;
  padding: 0;
  width: 22px;
`;

const SLine = styled.div<IHamburgerProps>`
  background-color: currentColor;
  border-radius: 2px;
  height: 2px;
  ${props =>
    props.active &&
    css`
      background-color: grey;

      &:first-child {
        transform: rotate(45deg);
        transform-origin: 0 5px;
      }

      &:nth-child(2) {
        transform: translateX(-100%);
        opacity: 0;
      }

      &:last-child {
        transform: rotate(-45deg);
        transform-origin: 1px -2px;
      }
    `};
  transition: all 0.5s ease;
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