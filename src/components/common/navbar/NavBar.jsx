import React from "react";

function NavBar(props) {
  console.log("nvbar");
  return (
    <nav className="nav-bar">
      <div className="menu-icon">
        <i className="fa fa-bars"></i>
      </div>
      <div className="user-info">
        <i className="fa fa-user-circle-o"></i>
        <span>Welcome Adham Hadeed</span>
      </div>
    </nav>
  );
}

export default NavBar;
