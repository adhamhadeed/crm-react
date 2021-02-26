import React, { useEffect, useReducer, useContext } from "react";
import { NavReducer, ACTIONS } from "./../reducer/NavReducer";

const initState = {
  isSiteView: true,
  navSelectedItemId: null,
  sliderSelectedItemId: null,
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

  const setMenuState = (menuConfiguration) => {
    dispatch({
      type: ACTIONS.SET_MENU_STATE,
      payload: menuConfiguration,
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
        setMenuState,
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
