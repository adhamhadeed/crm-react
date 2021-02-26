import React, { useState } from "react";
import PageTemplate from "../../templates/PageTemplate";

const Settings = () => {
  const [data, setData] = useState([]);
  return (
    <>
      {(response) => {
        console.log(response);
      }}
    </>
  );
};
export default Settings;
