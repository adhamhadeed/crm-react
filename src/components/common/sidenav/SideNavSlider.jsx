import React from "react";
import SideNavList from "../list/SideNavList";
import List from "../list/List";
import { useGlobalContext } from "../../../context/SideNavContext";
import Toolbar from "./../Toolbar";

const SideNavSlider = React.forwardRef(
  ({ toggle, toolbarButtons, onClick, selectedItem }, ref) => {
    const { sliderItems } = useGlobalContext();

    const getItems = (items) => {
      if (!items || items.length === 0) return [];
      return Object.values(items)[0];
    };
    const getComponentKey = (items) => {
      if (!items || items.length === 0) return null;
      return Object.keys(items)[0];
    };

    const toggleSlider = () => {
      let className = "side-nav-slider";
      return toggle ? (className += " slide-in") : className;
    };

    return (
      <div className={toggleSlider()} ref={ref}>
        <Toolbar buttons={toolbarButtons} />
        <div className="slider-list-items">
          {sliderItems.map((items) => {
            const listKey = getComponentKey(items);
            return (
              <List
                showList={selectedItem === listKey}
                items={getItems(items)}
                render={(item) => (
                  <SideNavList
                    item={item}
                    onClick={onClick}
                    selectedItem={selectedItem}
                  />
                )}
              />
            );
          })}
        </div>
      </div>
    );
  }
);

export default SideNavSlider;
