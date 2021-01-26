import { getNavListItems } from "./../services/SideNavService";

const ACTIONS = {
  GET_ITEMS: "get_items",
  SET_VIEW: "set_view",
};
const NavReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_ITEMS:
      const items = getNavListItems(state.isSiteView ? "site" : "studio");
      return {
        ...state,
        items,
      };
    case ACTIONS.SET_VIEW:
      return {
        ...state,
        isSiteView: action.payload,
      };
    default:
  }
};

export { NavReducer, ACTIONS };
