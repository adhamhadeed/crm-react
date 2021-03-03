import React from "react";
import SideNavList from "../list/SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";
import Styled from "styled-components";
import List from "../list/List";
import Toolbar from "../Toolbar";

const Wrapper = Styled.div`
  width: var(--slider-width);
  position: absolute;
  transform: translateX(-400px);
  /* left: calc((var(--side-nav-slider-width) + var(--side-nav-width)) * -1); */
  z-index: calc(var(--app-zindex) - 2);
  transition: transform var(--app-transition);
  position: absolute;
  bottom: 0;
  top: var(--nav-bar-height);
  & .slide-in{
     /* left: var(--side-nav-width); */
    transform: translateX(var(--side-nav-width));
  }
  `;

const Slider = React.forwardRef(
  ({ toggle, toolbarButtons, onClick, navKey }, ref) => {
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
      let className = "slider";
      return toggle ? (className += " slide-in") : className;
    };

    return (
      <Wrapper className={toggleSlider()} ref={ref}>
        <Toolbar buttons={toolbarButtons} />
        <div className="slider-list-items">
          {sliderItems.map((items) => {
            const compNavKey = getComponentKey(items);
            return (
              <List
                key={compNavKey}
                showList={compNavKey === navKey}
                items={getItems(items)}
                render={(item) => (
                  <SideNavList
                    key={item.id}
                    item={item}
                    onClick={onClick}
                    navKey={navKey}
                  />
                )}
              />
            );
          })}
        </div>
      </Wrapper>
    );
  }
);

export default Slider;
