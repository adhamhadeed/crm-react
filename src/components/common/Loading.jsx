import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  position: fixed;
  background: #000;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 125;
  top: 0;
  opacity: 0.5;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Loading = (props) => {
  return (
    <Loader>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: "absolute", left: "50%", top: "40%" }}
      >
        <div className="BarLoader text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </Loader>
  );
};

export default Loading;
