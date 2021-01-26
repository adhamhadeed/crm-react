import React, { useContext, useEffect } from "react";
import ThemesContext from "./../context/ThemesContext";
import { THEMES, getTheme } from "./../themes";
import SideNav from "../components/common/sidenav/SideNav";
import BreadCrumb from "./../components/breadCrumb/BreadCrumb";

const SiteLayout = (props) => {
  const { toggleTheme } = useContext(ThemesContext);

  useEffect(() => {
    toggleTheme(getTheme(THEMES.BASIC));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SideNav />
      <div className="main-content">
        <BreadCrumb />
        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

export default SiteLayout;
