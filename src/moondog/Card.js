import React from "react";
import styled from "styled-components";

import sausage from "./sausage.png";

const CardContainer = styled.div`
  display: flex;
  border: 2px solid lightgray;
  width: 1088px;
  margin: auto;
`;

const CardFront = styled.div``;

const CardBack = styled.div`
  margin: auto;
`;

const BlockImage = styled.img`
  display: block;
`;

const Card = ({ greeting }) => (
  <CardContainer>
    <CardFront>
      <BlockImage src={sausage} alt="Card Front" />
    </CardFront>
    <CardBack>{greeting}</CardBack>
  </CardContainer>
);

export default Card;
