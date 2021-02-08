import { getNavListItems } from "./../services/SideNavService";
import { getSliderItems } from "./../services/SliderServices";

const ACTIONS = {
  GET_NAV_ITEMS: "get_nav_items",
  GET_SLIDER_ITEMS: "get_slider_items",
  SET_VIEW: "set_view",
  SET_NAV_SELECTED_ITEM: "set_nav_selected_item",
  SET_SLIDER_SELECTED_ITEM: "set_slider_selected_item",
};
const NavReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_NAV_ITEMS:
      const navItems = getNavListItems(state.isSiteView ? "site" : "studio");
      return {
        ...state,
        navItems,
      };
    case ACTIONS.GET_SLIDER_ITEMS:
      const sliderItems = getSliderItems();
      return {
        ...state,
        sliderItems,
      };
    case ACTIONS.SET_NAV_SELECTED_ITEM:
      return {
        ...state,
        navSelectedItemId: action.payload,
      };
    case ACTIONS.SET_SLIDER_SELECTED_ITEM:
      return {
        ...state,
        sliderSelectedItemId: action.payload,
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
