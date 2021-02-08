import React, { useEffect, useReducer, useContext } from "react";
import { NavReducer, ACTIONS } from "./../reducer/NavReducer";

const initState = {
  isSiteView: true,
  navSelectedItemId: "dashboard",
  sliderSelectedItemId: "dashboard",
  navItems: [],
  sliderItems: [],
};

const SideNavContext = React.createContext();

const SideNavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NavReducer, initState);

  const getNavListItems = () => {
    dispatch({
      type: ACTIONS.GET_NAV_ITEMS,
    });
  };
  const getSliderItems = () => {
    dispatch({
      type: ACTIONS.GET_SLIDER_ITEMS,
    });
  };

  const setView = (isSiteView) => {
    dispatch({
      type: ACTIONS.SET_VIEW,
      payload: isSiteView,
    });
  };

  const setNavItemClicked = (itemId) => {
    dispatch({
      type: ACTIONS.SET_NAV_SELECTED_ITEM,
      payload: itemId,
    });
  };
  const setSliderItemClicked = (itemId) => {
    dispatch({
      type: ACTIONS.SET_SLIDER_SELECTED_ITEM,
      payload: itemId,
    });
  };

  useEffect(() => {
    getNavListItems();
  }, [state.isSiteView]);

  useEffect(() => {
    getSliderItems();
  }, []);
  return (
    <SideNavContext.Provider
      value={{
        ...state,
        setView,
        setNavItemClicked,
        setSliderItemClicked,
      }}
    >
      {children}
    </SideNavContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(SideNavContext);
};
export { SideNavProvider, useGlobalContext };
export default SideNavContext;
