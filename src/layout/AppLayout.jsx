import React from "react";
import SideNav from "../components/common/sidenav/SideNav";
import Styled from "styled-components";

const Main = Styled.div`
overflow: hidden;
  display: flex;
`;

const AppLayout = (props) => {
  console.log("AppLayout");
  return (
    <Main className="main-app">
      <SideNav />
      {props.children}
    </Main>
  );
};

export default AppLayout;
