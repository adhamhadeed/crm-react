import React from "react";
import SideNavSliderList from "./SideNavSliderList";
import Toolbar from "./../Toolbar";

const SideNavSlider = React.forwardRef(
  ({ toggle, toolbarButtons, onClick }, ref) => {
    const toggleSlider = () => {
      let className = "side-nav-slider";
      return toggle ? (className += " slide-in") : className;
    };
    return (
      <div className={toggleSlider()} ref={ref}>
        <Toolbar buttons={toolbarButtons} />
        <SideNavSliderList onClick={onClick} />
      </div>
    );
  }
);

export default SideNavSlider;
