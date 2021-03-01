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
  /* display: grid;
  grid-template-columns: ${(props) =>
    "repeat(" + props.children.length + ", minmax(175px, var(--box-width)))"};
  grid-auto-rows: auto; */
  justify-content: center;
  margin-bottom: 20px;
  /* grid-template-rows: 100px; */
  gap: 20px;
  /* @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);  
  } */
  font-size: 0.6em;
`;
