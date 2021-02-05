import React, { useContext, useEffect } from "react";
import ThemesContext from "./../context/ThemesContext";
import { THEMES, getTheme } from "./../themes";
import SideNav from "../components/common/sidenav/SideNav";

const StudioLayout = (props) => {
  const { toggleTheme } = useContext(ThemesContext);

  useEffect(() => {
    toggleTheme(getTheme(THEMES.STUDIO));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SideNav />
      <div className="main-content studio">
        <div className="content">{props.children}</div>
      </div>
      <div className="aa"></div>
    </>
  );
};

export default StudioLayout;
