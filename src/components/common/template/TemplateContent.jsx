import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
    padding:var(--app-alt-padding);
    flex:1;
    display: flex;
    flex-direction: column;
`;
const TemplateContent = (props) => {
  return <Wrapper className="tpl-content">{props.children}</Wrapper>;
};

export default TemplateContent;
