const getItems = () => {
  return [
    {
      modules: [
        {
          id: "companies",
          icon: "fa fa-cubes",
          label: "Companies",
        },
        {
          id: "currencies",
          icon: "fa fa-cubes",
          label: "Currencies",
        },
        {
          id: "products",
          icon: "fa fa-cubes",
          label: "Products",
        },
        {
          id: "mod13",
          icon: "fa fa-cubes",
          label: " long text to check style long text to check style",
        },
        {
          id: "orders",
          icon: "fa fa-cubes",
          label: "Orders",
        },
        {
          id: "contacts",
          icon: "fa fa-cubes",
          label: "Contacts",
        },
      ],
    },
    {
      components: [
        {
          id: "comp1",
          icon: "fa fa-th",
          label: "Grid11",
        },
        {
          id: "comp2",
          icon: "fa fa-th",
          label: "Grid2",
        },
        {
          id: "comp3",
          icon: "fa fa-line-chart",
          label: "Chart 1",
        },
        {
          id: "comp4",
          icon: "fa fa-line-chart",
          label: "chart 2",
        },
      ],
    },
    {
      navigation: [
        {
          id: "nav1",
          icon: "fa fa-location-arrow",
          label: "navigation 2",
        },
        {
          id: "nav2",
          icon: "fa fa-location-arrow",
          label: "navigation 22",
        },
        {
          id: "nav3",
          icon: "fa fa-location-arrow",
          label: "navigation 62",
        },
        {
          id: "nav4",
          icon: "fa fa-location-arrow",
          label: "navigation 012",
        },
      ],
    },
  ];
};

const getSliderItems = () => {
  return getItems();
};

export { getSliderItems };
