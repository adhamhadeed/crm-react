// eslint-disable-next-line import/no-anonymous-default-export

const BASIC = {
  body_bg_alt_color: "var(--app-body-alt-bg-color)",
  body_bg_color: "var(--app-body-bg-color)",
  box_shadow: "var(--app-box-shadow)",
  body_text_color: "var(--app-color)",
  border_color: "var(--app-border-color)",
  content_text_color: "var(--app-content-text-color)",
  link_color: "var(--app-link-color)",
  link_bg_hover_color: "var(--app-link-bg-hover-color)",
  side_nav_selected_bg_color: "var(--app-side-nav-selected-bg-color)",
  side_nav_border_bg_color: "var(--app-side-nav-border-bg-color)",
  text_shadow: "var(--app-text-shadow)",
};
const DARK = {
  ...BASIC,
  linkHoverBgColor: "#089308",
  sideNavSliderBgColor: "#343a40",
  linkColor: "#fff",
  navBarBgColor: "#0f680f",
  sideNavBgColor: "#0f680f",
  navTextColor: "#ffff",
  selectedListItemBgColor: "#089308",
};

const STUDIO = {
  ...BASIC,
};

const THEMES = {
  BASIC: "basic",
  DARK: "dark",
  STUDIO: "studio",
};
const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.DARK:
      return DARK;
    case THEMES.STUDIO:
      return STUDIO;
    default:
      return BASIC;
  }
};

export { THEMES, getTheme };
