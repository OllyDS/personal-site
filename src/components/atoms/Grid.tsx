import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 2em;
  padding-right: 2em;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  height: auto;
  margin-bottom: 4em;
  width: 100%;
`;

interface ICellProps {
  mdWidth?: number;
  mdLeft?: number;
  width?: number;
}

export const Cell = styled.div<ICellProps>`
grid-column-end: span ${props => props.width ? props.width : 1};
grid-row-end: span 1;
height: 100%;
min-width: 0;

  @media(min-width: 640px) {
    align-items: flex-start;

    ${props => props.mdWidth && `grid-column-end: span ${props.mdWidth}`};
    ${props => props.mdLeft && `grid-column-start: ${props.mdLeft}`};
  }
`;