// @ts-nocheck

import React from "react";
import styled from "styled-components";
import { Template, GlobalStyle } from "./styles";

interface Props {
  count: number;
}

const Component: React.FC<Props> = ({ count }) => {
  // Main return
  return (
    <Template>
      <Container>
        <Text>Ami have been alone for {count} days</Text>
      </Container>
      <GlobalStyle />
    </Template>
  );
};

export default Component;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 35px;
`;
