import React from "react";
import styled from "styled-components";
import { BounceLoader, BarLoader, SyncLoader } from "react-spinners";

const Loader = styled.div`
  position: fixed;
  background: #000;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 100;
  top: 0;
  opacity: 0.5;
  transition: opacity 0.15s linear;
`;
const Loading = (props) => {
  return (
    <Loader>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <BounceLoader size={40} color="var(--app-color)" loading />
        <BarLoader size={40} color="var(--app-color)" loading /> */}
        <SyncLoader size={20} color="var(--app-color)" loading={true} />
      </div>
    </Loader>
  );
};

export default Loading;
