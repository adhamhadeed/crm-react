const getItems = (view) => {
  switch (view) {
    case "studio":
      return [
        {
          id: "dashboard",
          icon: "fa fa-tachometer",
          path: "/studio",
          label: "Dashboard",
          name: "Dashboard",
          isRedirect: true,
        },
        {
          id: "navigation",
          icon: "fa fa-location-arrow",
          path: "/",
          label: "Navigation",
          name: "Navigation",
          isRedirect: false,
        },
        {
          id: "components",
          icon: "fa fa-list",
          path: "/",
          label: "Components",
          name: "Components",
          isRedirect: false,
        },
        {
          id: "modules",
          icon: "fa fa-cubes",
          path: "/",
          label: "Modules",
          name: "Modules",
          isRedirect: false,
        },
        {
          id: "users",
          icon: "fa fa-users",
          path: "/studio/users",
          label: "Users",
          name: "Users",
          isRedirect: true,
        },
        {
          id: "applicationProperties",
          icon: "fa fa-snowflake-o",
          path: "/studio/applicationProperties",
          label: "App. Prop",
          name: "Application Properties",
          isRedirect: true,
        },
        {
          id: "settings",
          icon: "fa fa-cogs",
          path: "/studio/settings",
          label: "Settings",
          name: "Settings",
          isRedirect: true,
        },
      ];
    default:
      return [
        {
          id: "dashboard",
          icon: "fa fa-tachometer",
          path: "/",
          label: "Dashboard",
          isRedirect: true,
        },

        {
          id: "navigation",
          icon: "fa fa-location-arrow",
          path: "/",
          label: "Navigation",
          isRedirect: false,
        },
        {
          id: "analytics",
          icon: "fa fa-line-chart",
          path: "/analytics",
          label: "Analytics",
          isRedirect: true,
        },
        {
          id: "reports",
          icon: "fa fa-database",
          path: "/reports",
          label: "Reports",
          isRedirect: true,
        },
        {
          id: "studio",
          icon: "fa fa-cogs",
          path: "/studio",
          label: "Studio",
          isRedirect: true,
        },
      ];
  }
};

const getNavListItems = (view) => {
  return getItems(view);
};

export { getNavListItems };
