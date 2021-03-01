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
  margin-bottom: 20px;
  gap: 20px;
  font-size: 0.6em;
`;
