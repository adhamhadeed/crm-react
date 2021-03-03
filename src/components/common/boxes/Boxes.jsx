import React from "react";
import Box from "./Box";
import styled from "styled-components";

function Boxes(props) {
  console.log("boxes");

  return (
    <Wrapper className="boxes">
      {props.list.map((box) => (
        <Box key={box.id} {...box} />
      ))}
    </Wrapper>
  );
}

export default Boxes;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--app-alt-margin);
  gap: var(--app-alt-padding);
  font-size: 0.6em;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (min-width: 501px) {
    flex-direction: column;
  }
  @media (min-width: 670px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    font-size: 0.8em;
  }
`;
