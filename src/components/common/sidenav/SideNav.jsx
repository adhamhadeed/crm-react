import React, { useEffect, useRef, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import SideNavSlider from "./SideNavSlider";
import SideNavList from "./SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";

const SideNav = ({ history, match }) => {
  console.log(history);
  console.log("sidenav");
  const sliderRef = useRef(null);
  const {
    setView: setIsSiteView,
    isSiteView,
    navItems,
    navSelectedItemId,
    sliderSelectedItemId,
    setNavItemClicked,
    setSliderItemClicked,
  } = useGlobalContext();

  const toolbarButtons = [
    {
      id: "close",
      label: "Close",
      icon: "fa fa-times",
      displayAsIcon: true,
      onClick: (e) => handleCloseButton(e),
    },
    {
      id: "add",
      label: "Add",
      icon: "fa fa-plus",
      displayAsIcon: true,
      onClick: (e) => handleAddButton(e),
    },
    {
      id: "edit",
      label: "Edit",
      icon: "fa fa-pencil",
      displayAsIcon: true,
      onClick: (e) => handleEditButton(e),
    },
    {
      id: "delete",
      label: "Delete",
      icon: "fa fa-trash",
      displayAsIcon: true,
      onClick: (e) => handleDeleteButton(e),
    },
  ];

  const [toggleSlider, setToggleSlider] = useState(false);
  const onHistoryPathChanged = () => {
    setIsSiteView(
      !(
        history.location.pathname &&
        history.location.pathname.toLowerCase().includes("studio")
      )
    );
  };

  useEffect(() => {
    console.log("onHistoryPathChanged");
    onHistoryPathChanged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const handleCloseButton = (e) => {
    setToggleSlider(false);
  };
  const handleAddButton = (e) => {
    console.log("add");
  };
  const handleEditButton = (e) => {
    console.log("edit");
  };
  const handleDeleteButton = (e) => {
    console.log("delete");
  };

  const changeRoute = (path) => {
    history.push(path);
  };
  // click over nav item
  const handleSideNavClick = (item) => {
    console.log(item);
    if (sliderRef.current) sliderRef.current.classList.remove("flip");

    if (item.isRedirect || item.id === navSelectedItemId || !toggleSlider) {
      if (item.isRedirect) {
        changeRoute(item.path);
        setToggleSlider(false);
      } else {
        setToggleSlider(!toggleSlider);
      }
    } else {
      // slider already open and cliked over other button
      setTimeout(() => {
        if (sliderRef.current) sliderRef.current.classList.add("flip");
      }, 0);
    }
    if (item.id !== navSelectedItemId) setNavItemClicked(item.id);
  };
  // click over slider item
  const handleSiderNavClick = (item) => {
    if (item.id !== sliderSelectedItemId) {
      let route = !isSiteView ? "/studio" : "";
      changeRoute(`${route}/${navSelectedItemId}/${item.id}`);
      setSliderItemClicked(item.id);
      setToggleSlider(false);
    }
  };

  // get toolbar buttons list based on buttonID
  const getToolBarButtons = () => {
    return navSelectedItemId === "modules"
      ? toolbarButtons.splice(0, 1)
      : toolbarButtons;
  };

  return (
    <>
      <div className="side-nav">
        <SideNavList items={navItems} onClick={handleSideNavClick} />
      </div>
      <SideNavSlider
        toggle={toggleSlider}
        toolbarButtons={getToolBarButtons()}
        ref={sliderRef}
        onClick={handleSiderNavClick}
      />
    </>
  );
};
export default withRouter(SideNav);
