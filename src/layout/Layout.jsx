import React from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Styled from "styled-components";

const Container = Styled.div`
 flex: 1;
 color:var(--app-content-text-color);
 display: flex;
 flex-direction:column;
 `;
const Content = Styled.div`
  height: 100%;
  padding: var(--app-alt-padding);
`;
const Template = Styled.div`
 height: 100%;
  border-radius: var(--app-border-radius);
  background-color: var(--app-content-bg-color);
  box-shadow: var(--app-box-shadow);
  display: flex;
  flex-direction: column;
`;
const Layout = (props) => {
  console.log("navigation layout");

  // const { toggleTheme } = useContext(ThemesContext);

  // useEffect(() => {
  //   toggleTheme(getTheme(THEMES.BASIC));
  // }, []);
  return (
    <Container className="main-container">
      {props.isSiteView && <BreadCrumb />}
      <Content className="content">
        <Template className="tpl">{props.children}</Template>
      </Content>
    </Container>
  );
};

export default Layout;
