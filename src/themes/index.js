// eslint-disable-next-line import/no-anonymous-default-export

const BASIC = {
  backgroundColor: "#f8f8f8",
  alternativeBgColor: "#fff",
  sideNavBgColor: "#fff",
  sideNavSliderBgColor: "#fff",
  navBarBgColor: "#fff",
  linkColor: "#4a8bc2",
  linkHoverBgColor: "#f8f8f8",
  boxShadow: "0 1px 15px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.1)",
  bodyTextColor: "#4a8bc2",
  navTextColor: "#4a8bc2",
  selectedListItemBgColor: "6px solid #4a8bc2",
};
const DARK = {
  ...BASIC,
  linkHoverBgColor: "#089308",
  sideNavSliderBgColor: "#343a40",
  linkColor: "#fff",
  navBarBgColor: "#0f680f",
  sideNavBgColor: "#0f680f",
  navTextColor: "#ffff",
  selectedListItemBgColor: "6px solid #089308",
};

const STUDIO = {
  ...BASIC,
  //navBarBgColor: "#4a8bc2",
  // sideNavBgColor: "#4a8bc2",
  // linkHoverBgColor: "#2f6897",
  // selectedListItemBgColor: "6px solid #2f6897",
  // navTextColor: "#fff",
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
