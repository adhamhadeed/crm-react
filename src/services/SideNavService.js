const getItems = (view) => {
  switch (view) {
    case "studio":
      return [
        {
          id: "dashboard",
          icon: "fa fa-tachometer",
          path: "/Studio",
          label: "Dashboard",
          isRedirect: true,
        },
        {
          id: "navigation",
          icon: "fa fa-list-alt",
          path: "/",
          label: "Navigation",
          isRedirect: false,
        },
        {
          id: "components",
          icon: "fa fa-list",
          path: "/",
          label: "Components",
          isRedirect: false,
        },
        {
          id: "modules",
          icon: "fa fa-cubes",
          path: "/",
          label: "Modules",
          isRedirect: false,
        },
        {
          id: "users",
          icon: "fa fa-users",
          path: "/Studio/Users",
          label: "Users",
          isRedirect: true,
        },
        {
          id: "settings",
          icon: "fa fa-cogs",
          path: "/Studio/Settings",
          label: "Settings",
          isRedirect: true,
        },
        {
          id: "site",
          icon: "fa fa-undo",
          path: "/",
          label: "Back To Site",
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
          icon: "fa fa-list-alt",
          path: "/",
          label: "Navigation",
          isRedirect: false,
        },
        {
          id: "reports",
          icon: "fa fa-database",
          path: "/Reports",
          label: "Reports",
          isRedirect: true,
        },
        {
          id: "studio",
          icon: "fa fa-cogs",
          path: "/Studio",
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
