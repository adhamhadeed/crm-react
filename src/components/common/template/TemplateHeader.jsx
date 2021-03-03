import React from "react";
import Toolbar from "../Toolbar";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Wrapper = Styled.div`
  font-size: 0.875em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--app-alt-padding);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--app-border-color);
  height: var(--template-header-height);

  border-radius: var(--app-border-radius) var(--app-border-radius) 0 0;
  background-color: #f9f9f9;
  background-image: -moz-linear-gradient(top, #fdfdfd, #f4f4f4);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#fdfdfd),
    to(#f4f4f4)
  );
  background-image: -webkit-linear-gradient(top, #fdfdfd, #f4f4f4);
  background-image: -o-linear-gradient(top, #fdfdfd, #f4f4f4);
  background-image: linear-gradient(to bottom, #fdfdfd, #f4f4f4);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdfdfd', endColorstr='#f4f4f4', GradientType=0);
  border-bottom: 1px solid #dbdbdb;
  -webkit-border-radius: var(--app-border-radius) var(--app-border-radius) 0px 0px;
  -moz-border-radius: var(--app-border-radius) var(--app-border-radius) 0px 0px;
  border-radius: var(--app-border-radius) var(--app-border-radius) 0px 0px;
  text-shadow: 0 1px 0 0 1px 0 #fff;
  text-transform: uppercase;
  font-weight: bold;

`;
const Title = Styled.div`
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & i{
    margin-right: 0.5rem;
    font-size: 1.5em;
  }
  & span{
    font-size: 1.25em;
    text-shadow: var(--app-text-shadow);
  }
`;
const Tbar = Styled.div`
   
`;
const TemplateHeader = ({ icon, header, toolbarButtons }) => {
  console.log("TemplateHeader");
  return (
    <Wrapper className="tpl-header">
      <Title className="tpl-title">
        <i className={icon}></i>
        <span className="tpl-title-name">{header}</span>
      </Title>
      <Tbar className="tpl-toolabr">
        <Toolbar buttons={toolbarButtons} />
      </Tbar>
    </Wrapper>
  );
};
TemplateHeader.propTypes = {
  icon: PropTypes.string,
  toolbarButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
};
TemplateHeader.defaultProps = {
  toolbarButtons: [],
};

export default TemplateHeader;
