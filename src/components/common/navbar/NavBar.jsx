import React from "react";

function NavBar(props) {
  console.log("nvbar");
  return (
    <nav className="nav-bar">
      <div className="menu-icon">
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}

export default NavBar;
