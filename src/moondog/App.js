import React from "react";
import styled from "styled-components";

import Card from "./Card";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <h1>Moondog</h1>
      <Card greeting="Your content here" />
    </AppContainer>
  );
}

export default App;
