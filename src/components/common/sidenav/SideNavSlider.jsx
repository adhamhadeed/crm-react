import React from "react";
// import List from "../common/List";
import Toolbar from "./../Toolbar";

const SideNavSlider = React.forwardRef(({ toggle, toolbarButtons }, ref) => {
  console.log("slider");

  const toggleSlider = () => {
    let className = "side-nav-slider";
    return toggle ? (className += " slide-in") : className;
  };
  return (
    <div className={toggleSlider()} ref={ref}>
      <Toolbar buttons={toolbarButtons} />
    </div>
  );
});

export default SideNavSlider;
