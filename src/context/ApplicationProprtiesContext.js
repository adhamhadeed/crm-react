import React, { useEffect, useReducer, useContext } from "react";
import { PropertiesReducer, ACTIONS } from "./../reducer/PropertiesReducer";
import { getProperties } from "./../services/AppPropertiesServices";
import Logger from "./../logger/Logger";

const initState = {
  data: [],
  isLoading: true,
};

const AppPropertiesContext = React.createContext();

const AppPropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PropertiesReducer, initState);

  const fetchProperties = async () => {
    try {
      const data = await getProperties();
      dispatch({
        type: ACTIONS.GET_PROPERTIES,
        payload: data,
      });
    } catch (err) {
      Logger.log(err.message);
    }
  };
  const updateProperty = () => {
    dispatch({
      type: ACTIONS.UPDATE_PROPERTY,
    });
  };
  const deleteProperty = () => {
    dispatch({
      type: ACTIONS.DELETE_PROPERTY,
    });
  };
  const addProperty = () => {
    dispatch({
      type: ACTIONS.ADD_PROPERTY,
    });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <AppPropertiesContext.Provider
      value={{
        ...state,
        updateProperty,
        deleteProperty,
        addProperty,
      }}
    >
      {children}
    </AppPropertiesContext.Provider>
  );
};
export { AppPropertiesProvider };
export default AppPropertiesContext;
