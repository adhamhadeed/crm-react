import React from "react";
import { useGlobalContext } from "../../../context/SideNavContext";
import List from "../List";

const SideNavSliderList = ({ onClick }) => {
  const { sliderItems, navSelectedItemId } = useGlobalContext();
  return (
    <div className="slider-list-items">
      {sliderItems.map((items, idx) => (
        <List
          key={idx}
          items={Object.values(items)[0]}
          isShown={navSelectedItemId === Object.keys(items)[0]}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default SideNavSliderList;
