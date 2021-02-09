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
  side_nav_selected_color: "var(--app-side-nav-selected-color)",
  side_nav_border_bottom_color: "var(--app-side-nav-border-bottom-color)",
  text_shadow: "var(--app-text-shadow)",
};
const DARK = {
  ...BASIC,
  link_bg_hover_color: "#089308",
  link_color: "#fff",
  side_nav_selected_bg_color: "#089308",
};

const STUDIO = {
  ...BASIC,

  // body_bg_alt_color: "#6f42c1",
  // content_text_color: "#6f42c1",
  // body_text_color: "#fff",
  // side_nav_border_bottom_color: "#432875",
  // side_nav_selected_bg_color: "#a077eb",
  // link_bg_hover_color: "#a077eb",
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
