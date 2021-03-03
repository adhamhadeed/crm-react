import React from "react";
import styled from "styled-components";

const NavBar = (props) => {
  console.log("nvbar");
  return (
    <Wrapper className="nav-bar">
      <div className="nav-menu-icon">
        <i className="fa fa-list list-icon"></i>
      </div>
      <div className="nav-user-info">
        <i className="fa fa-user"></i>
        <span>Welcome: Adham Hadeed</span>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.nav`
  background: #fff;
  width: 100%;
  display: flex;
  height: var(--nav-bar-height);
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: var(--app-zindex);
  .nav-menu-icon {
    width: var(--nav-bar-left-menu-width);
    text-align: center;
    height: 100%;
    box-shadow: var(--app-box-shadow);
    position: relative;
    transition: var(--app-transition);
  }
  .nav-menu-icon i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .nav-user-info {
    padding-right: var(--app-alt-padding);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-user-info i {
    padding-right: 0.5rem;
  }
  .nav-user-info span {
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    // font size 12px of bosu wich is 16px;
    font-size: 0.75em;
  }
  @media (max-width: 500px) {
    --nav-bar-left-menu-width: 3em;
    .nav-menu-icon {
      transform: translateX(0px);
    }
  }
  @media (min-width: 501px) {
    .nav-menu-icon {
      transform: translateX(-200px);
    }
  }
  @media (min-width: 768px) {
  }
`;
