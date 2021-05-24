import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 1200px;
    height: 630px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Template = styled.div`
  width: 100%;
  height: 100%;
`;
