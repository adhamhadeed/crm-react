const ACTIONS = {
  GET_PROPERTIES: "get_properties",
  UPDATE_PROPERTY: "update_property",
  DELETE_PROPERTY: "delete_property",
  ADD_PROPERTY: "add_property",
};
const PropertiesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROPERTIES:
      return {
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS.UPDATE_PROPERTY:
      return {
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS.DELETE_PROPERTY:
      return {
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS.ADD_PROPERTY:
      return {
        isLoading: false,
        data: action.payload,
      };
    default:
  }
  return state;
};

export { PropertiesReducer, ACTIONS };
