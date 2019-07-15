import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #bab2a8;
  font-size: 50px;
`;

function App() {
  return (
    <Content>
      <Title>moondog</Title>
      <Card greeting="Your content here" />
    </Content>
  );
}

export default App;
