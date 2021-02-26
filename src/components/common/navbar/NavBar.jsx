import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  background: #fff;
  width: 100%;
  display: flex;
  height: 3.43em;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .menu-icon {
    width: var(--side-nav-width);
    text-align: center;
    height: 100%;
    box-shadow: var(--app-box-shadow);
    display: var(--nav-bar-display-menu);
    position: relative;
  }
  .menu-icon i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
  }
  .user-info {
    padding-right: var(--app-alt-padding);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-info i {
    padding-right: 0.5em;
  }
  .user-info span {
    font-weight: bold;
    font-size: 0.75em;
  }
`;

function NavBar(props) {
  console.log("nvbar");
  return (
    <Wrapper className="nav-bar">
      <div className="menu-icon">
        <i className="fa fa-user-circle-o"></i>
      </div>
      <div className="user-info">
        <i className="fa fa-user"></i>
        <span>Welcome: Adham Hadeed</span>
      </div>
    </Wrapper>
  );
}

export default NavBar;
