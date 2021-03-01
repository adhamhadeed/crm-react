import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  background: #fff;
  width: 100%;
  display: flex;
  height: var(--nav-bar-height);
  justify-content: space-between;
  align-items: center;

  position: relative;
  .nav-menu-icon {
    width: 4em;
    text-align: center;
    height: 100%;
    box-shadow: var(--app-box-shadow);
    position: relative;
  }
  .nav-menu-icon i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
  }
  .nav-user-info {
    padding-right: var(--app-alt-padding);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75em;
  }
  .nav-user-info i {
    padding-right: 0.5rem;
  }
  .nav-user-info span {
    font-weight: bold;
  }
`;

function NavBar(props) {
  console.log("nvbar");
  return (
    <Wrapper className="nav-bar">
      <div className="nav-menu-icon">
        <i className="fa fa-user-circle-o"></i>
      </div>
      <div className="nav-user-info">
        <i className="fa fa-user"></i>
        <span>Welcome: Adham Hadeed</span>
      </div>
    </Wrapper>
  );
}

export default NavBar;
