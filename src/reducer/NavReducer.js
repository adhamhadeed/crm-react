import { getNavListItems } from "./../services/SideNavService";
import { getSliderItems } from "./../services/SliderServices";

const ACTIONS = {
  GET_NAV_ITEMS: "get_nav_items",
  GET_SLIDER_ITEMS: "get_slider_items",
  SET_VIEW: "set_view",
  SET_MENU_STATE: "set_menu_state",
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
    case ACTIONS.SET_MENU_STATE:
      let navSelectedId = "dashboard";
      let sliderSelectedId = "dashboard";
      const {
        isSiteView,
        navSelectedItemId,
        sliderSelectedItemId,
      } = action.payload;
      navSelectedId =
        !navSelectedItemId || navSelectedItemId.length === 0
          ? navSelectedId
          : navSelectedItemId;
      sliderSelectedId =
        !sliderSelectedItemId || sliderSelectedItemId.length === 0
          ? sliderSelectedId
          : sliderSelectedItemId;
      return {
        ...state,
        isSiteView,
        navSelectedItemId: navSelectedId,
        sliderSelectedItemId: sliderSelectedId,
      };
    case ACTIONS.SET_TOGGLE:
      return {
        ...state,
        toggleSlider: action.payload,
      };

    default:
  }
};

export { NavReducer, ACTIONS };
