const getItems = () => {
  return [
    {
      modules: [
        {
          id: "companies",
          icon: "fa fa-briefcase",
          label: "Companies",
        },
        {
          id: "currencies",
          icon: "fa fa-eur",
          label: "Currencies",
        },
        {
          id: "products",
          icon: "fa fa-cubes",
          label: "Products",
        },
        {
          id: "orders",
          icon: "fa fa-list-ol",
          label: "Orders",
        },
        {
          id: "contacts",
          icon: "fa fa-plug",
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

    // {
    //   navigation2: [
    //     {
    //       id: "nav1",
    //       icon: "fa fa-location-arrow",
    //       label: "navigation 2",
    //     },
    //     {
    //       id: "nav2",
    //       icon: "fa fa-location-arrow",
    //       label: "navigation 22",
    //     },
    //     {
    //       id: "nav3",
    //       icon: "fa fa-location-arrow",
    //       label: "navigation 62",
    //     },
    //     {
    //       id: "nav4",
    //       icon: "fa fa-location-arrow",
    //       label: "navigation 012",
    //     },
    //   ],
    // },
    {
      navigation: [
        {
          id: "15f039a792d9179777fe26423",
          name: "page 11111",
          label: "my Page 11111",
          type: "page",
          innerPages: [],
        },
        {
          id: "5f039a792d9179777fe26423",
          name: "page 1",
          label: "my Page 1",
          type: "page",
          innerPages: [
            {
              name: "page 1_1",
              label: "my Page 1_1",
              type: "page",
              innerPages: [
                {
                  name: "portfolio",
                  type: "portfolio",
                  isSelected: false,
                  title: "This is a new portfolio title",
                  subTitle: "this is a new subtitle for portfolio",
                  label: "my Portfolio 1 3x3",
                  innerPages: [],
                },
                {
                  name: "portfolio2",
                  type: "portfolio",
                  isSelected: true,
                  label: "my Portfolio 2 2x3",
                  innerPages: [],
                },
                {
                  name: "portfolio6",
                  type: "portfolio",
                  label: "my portfolio 6 3x3",
                  innerPages: [],
                },
                {
                  name: "portfolio7",
                  type: "portfolio",
                  label: "my portfolio 3x4",
                  innerPages: [],
                },
                {
                  name: "portfolio8",
                  type: "portfolio",
                  label: "portfolio 4x4",
                  innerPages: [],
                },
                {
                  name: "portfolio10",
                  type: "portfolio",
                  label: "portfolio 2x2",
                  innerPages: [],
                },
                {
                  name: "portfolio11",
                  type: "portfolio",
                  label: "portfolio 1x2",
                  innerPages: [],
                },
                {
                  name: "portfolio12",
                  type: "portfolio",
                  label: "portfolio 2x1",
                  innerPages: [],
                },
              ],
            },
            {
              name: "page 1_2",
              label: "my page 1_2",
              type: "page",
              innerPages: [
                {
                  name: "portfolio3",
                  type: "portfolio",
                  isSelected: false,
                  label: "my Portfolio3 1x1",
                  innerPages: [
                    {
                      name: "portfolio223",
                      type: "portfolio",
                      isSelected: false,
                      label: "my Portfolio3 7x1",
                      innerPages: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "page 1_3",
              label: "my Page 1_3",
              type: "page",
              innerPages: [
                {
                  name: "portfolio4",
                  type: "portfolio",
                  label: "my Portfolio4",
                  isSelected: false,
                  innerPages: [],
                },
              ],
            },
          ],
        },
        {
          id: "5f039a792d917977754656fe26423",
          name: "page 441",
          label: "my Page 4441",
          type: "page",
          innerPages: [],
        },
        {
          id: "5f037754656fe26423",
          name: "page 041",
          label: "my Page 041",
          type: "page",
          innerPages: [],
        },
      ],
    },
  ];
};

const getSliderItems = () => {
  return getItems();
};

export { getSliderItems };
