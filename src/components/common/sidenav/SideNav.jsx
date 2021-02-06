import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import SideNavSlider from "./SideNavSlider";
import SideNavList from "./SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";

const SideNav = (props) => {
  const sliderRef = useRef(null);

  const history = useHistory();
  const { setView: setIsSiteView, items } = useGlobalContext();
  const [toggle, setToggle] = useState(false);
  const [selectedButtonId, setSelectedButtonId] = useState(null);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onHistoryPathChanged = () => {
    setIsSiteView(
      !(
        history.location.pathname &&
        history.location.pathname.toLowerCase().includes("studio")
      )
    );
  };

  useEffect(() => {
    onHistoryPathChanged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const handleCloseButton = (e) => {
    setToggle(false);
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

  const changeRoute = (btn) => {
    history.push(btn.path);
  };

  const handleClick = (btn) => {
    if (sliderRef.current) sliderRef.current.classList.remove("flip");

    if (btn.isRedirect || btn.id === selectedButtonId || !toggle) {
      if (btn.isRedirect) {
        changeRoute(btn);
        setToggle(false);
      } else {
        setToggle(!toggle);
      }
    } else {
      // slider already open and cliked over other button
      setTimeout(() => {
        if (sliderRef.current) sliderRef.current.classList.add("flip");
      }, 0);
    }
    setSelectedButtonId(btn.id);
  };
  // get toolbar buttons based on buttonID
  const getToolBarButtons = () => {
    return selectedButtonId === "modules"
      ? toolbarButtons.splice(0, 1)
      : toolbarButtons;
  };

  return (
    <>
      <div className="side-nav">
        <SideNavList items={items} onClick={handleClick} />
      </div>

      <SideNavSlider
        toggle={toggle}
        toolbarButtons={getToolBarButtons()}
        ref={sliderRef}
      />
    </>
  );
};
export default SideNav;
