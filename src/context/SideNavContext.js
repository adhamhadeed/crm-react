import React, { useEffect, useReducer, useContext } from "react";
import { NavReducer, ACTIONS } from "./../reducer/NavReducer";

const initState = {
  isSiteView: true,
  selectedItemId: 0,
  items: [],
};

const SideNavContext = React.createContext();

const SideNavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NavReducer, initState);

  const getListItems = () => {
    dispatch({
      type: ACTIONS.GET_ITEMS,
    });
  };
  const setView = (isSiteView) => {
    dispatch({
      type: ACTIONS.SET_VIEW,
      payload: isSiteView,
    });
  };
  useEffect(() => {
    getListItems();
  }, [state.isSiteView]);

  return (
    <SideNavContext.Provider
      value={{
        ...state,
        getListItems,
        setView,
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
