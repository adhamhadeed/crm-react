import React from "react";
// import List from "../common/List";
import Toolbar from "./../Toolbar";

function SideNavSlider({ toggle, toolbarButtons }) {
  console.log("slider");

  const toggleSlider = () => {
    let className = "side-nav-slider";
    return toggle ? (className += " slide-in") : className;
  };

  return (
    <div className={toggleSlider()}>
      <Toolbar buttons={toolbarButtons} />
    </div>
  );
}

export default SideNavSlider;
