import React, { useContext, useEffect } from "react";
import ThemesContext from "./../context/ThemesContext";
import { THEMES, getTheme } from "./../themes";

const StudioLayout = (props) => {
  const { toggleTheme } = useContext(ThemesContext);

  useEffect(() => {
    toggleTheme(getTheme(THEMES.STUDIO));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-content studio">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default StudioLayout;
