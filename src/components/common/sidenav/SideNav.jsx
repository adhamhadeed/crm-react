import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import SideNavSlider from "./SideNavSlider";
import SideNavList from "../list/SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";
import List from "../list/List";

// import Modal from "../Modal";

const SideNav = ({ history, match }) => {
  const sliderRef = useRef(null);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeletePopUp, setShowDeletePopup] = useState(false);

  const {
    isSiteView,
    navItems,
    sliderSelectedItemId,
    setMenuState,
  } = useGlobalContext();

  const [navClickedItem, setNavClickedItem] = useState();

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
      disabled: true,
      onClick: (e) => handleAddButton(e),
    },
    {
      id: "edit",
      label: "Edit",
      icon: "fa fa-pencil",
      displayAsIcon: true,
      disabled: true,
      onClick: (e) => handleEditButton(e),
    },
    {
      id: "delete",
      label: "Delete",
      icon: "fa fa-trash",
      displayAsIcon: true,
      disabled: true,
      onClick: (e) => handleDeleteButton(e),
    },
  ];

  const onHistoryPathChanged = () => {
    let state = {};
    const path = history.location.pathname.split("/");
    const isSite =
      history.location.pathname &&
      history.location.pathname.toLowerCase().includes("studio");

    state.isSiteView = !isSite;
    state.navSelectedItemId = !isSite ? path[1] : path[2];
    state.sliderSelectedItemId = !isSite ? path[2] : path[3];
    setMenuState(state);
    setToggleSlider(false);
    setNavClickedItem(state.navSelectedItemId);
  };

  useEffect(() => {
    onHistoryPathChanged();
  }, [history.location.pathname]);

  const handleCloseButton = (e) => {
    setToggleSlider(false);
  };

  const navigate = (path) => {
    history.push(path);
  };

  const handleAddButton = (e) => {
    setShowAddEditModal(true);
  };
  const handleEditButton = (e) => {};
  const handleDeleteButton = (e) => {};

  // click over nav item
  const handleSideNavClick = (item) => {
    console.log(item);
    if (sliderRef.current) sliderRef.current.classList.remove("flip");

    if (item.isRedirect) {
      setToggleSlider(false);
      if (item.id !== navClickedItem) navigate(item.path);
      return;
    }
    if (!item.isRedirect) {
      if (!toggleSlider || item.id === navClickedItem) {
        setToggleSlider(!toggleSlider);
      } else {
        setTimeout(() => {
          if (sliderRef.current) sliderRef.current.classList.add("flip");
        }, 0);
      }
      setNavClickedItem(item.id);
    }
  };
  // click over slider item
  const handleSiderNavClick = (item) => {
    if (item.id !== sliderSelectedItemId) {
      let route = !isSiteView ? "/studio" : "";
      navigate(`${route}/${navClickedItem}/${item.id}`);
    }
  };

  // get toolbar buttons list based on buttonID
  const getToolBarButtons = () => {
    return navClickedItem === "modules"
      ? toolbarButtons.splice(0, 1)
      : toolbarButtons;
  };

  return (
    <>
      <div className="side-nav">
        <List
          items={navItems}
          render={(item) => (
            <SideNavList
              key={item.id}
              item={item}
              onClick={handleSideNavClick}
            />
          )}
        />
      </div>
      <SideNavSlider
        toggle={toggleSlider}
        toolbarButtons={getToolBarButtons()}
        ref={sliderRef}
        onClick={handleSiderNavClick}
        navKey={navClickedItem}
      />
    </>
  );
};
export default withRouter(SideNav);
