import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  /* height: var(--box-height); */
  border-width: 1px;
  border-style: solid;
  border-color: var(--app-border-color);
  border-radius: var(--app-border-radius);
  display: flex;
  flex: 1 1 6.25em;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  & > div {
  padding: 0.8em;
  height: 100%;
  box-shadow: inset var(--app-box-shadow);
}
`;
const BoxIcon = Styled.div`
 border-right-width: 1px;
  border-right-style: solid;
  border-right-color: var(--app-border-color);
  position: relative;
  width: 5.5em;
  & i {
  font-size: 3em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
`;
const BoxInfo = Styled.div`
 flex: 1;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
 
`;
const BoxInfoLabel = Styled.div`
    font-size: 1.25em;
 `;
const BoxInfoNum = Styled.div`
text-shadow: var(--app-text-shadow);
   font-size: 3em;
 `;
const Box = ({ icon, label }) => {
  return (
    <Wrapper className="box">
      <BoxIcon className="box-icon">
        <i className={icon}></i>
      </BoxIcon>
      <BoxInfo className="box-info">
        <BoxInfoLabel className="box-info-label">{label}</BoxInfoLabel>
        <BoxInfoNum className="box-info-num">50</BoxInfoNum>
      </BoxInfo>
    </Wrapper>
  );
};

export default Box;
