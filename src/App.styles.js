import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

export const Header = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #345b7b;
  font-family: sans-serif;
  border-radius: 8px;
`;

export const Logo = styled.h1`
  color: white;
  font-weight: 200;
`;

export const ItemsWrapper = styled.div`
    display: flex;
`;

export const Item = styled.a`
    color: white;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
`;

export const ContentBlock = styled.div`
  border: solid 1px #7c8380;
  border-radius: 8px;
  background-color: #a4d3c3;
  height: 200px;

  &:hover {
    animation: ${rotate} 0.5s;
    animation-iteration-count: infinite;
  }
`;
