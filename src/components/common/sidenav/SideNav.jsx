import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SideNavSlider from "./SideNavSlider";
import SideNavList from "./SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";

const SideNav = (props) => {
  const history = useHistory();
  const { setView: setIsSiteView, items } = useGlobalContext();
  const [toggle, setToggle] = useState(false);
  const [buttonId, setButtonId] = useState(null);
  const toolbarButtons = [
    {
      id: "close",
      label: "Close",
      icon: "fa fa-times",
      onClick: (e) => handleCloseButton(e),
    },
    {
      id: "add",
      label: "Add",
      icon: "fa fa-plus",
      onClick: (e) => handleAddButton(e),
    },
    {
      id: "edit",
      label: "Edit",
      icon: "fa fa-pencil",
      onClick: (e) => handleEditButton(e),
    },
    {
      id: "delete",
      label: "Delete",
      icon: "fa fa-trash",
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     items: this.props.items,
  //     slideIn: false,
  //     selectedSideNavBtnId: "examples",
  //     selectedSliderNavBtnId: null,

  //   };
  // }

  // hanldeDataClick = (btn) => {
  //   if (["examples", "components"].includes(btn.id)) {
  //     this.toggleMenu(btn);
  //   } else {
  //     this.changeRoute(btn);
  //   }
  // };
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
  //const toggleMenu = (btn) => {
  //   let { selectedSideNavBtnId, slideIn } = this.state;
  //   if (selectedSideNavBtnId !== btn.id) {
  //     if (!slideIn) slideIn = !slideIn;
  //   } else {
  //     slideIn = !slideIn;
  //   }
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     selectedSideNavBtnId: btn.id,
  //     slideIn,
  //   }));
  // };

  const changeRoute = (btn) => {
    // const { selectedSideNavBtnId } = this.state;
    // if (selectedSideNavBtnId !== btn.id) {
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     selectedSideNavBtnId: btn.id,
    //     slideIn: false,
    //   }));
    history.push(btn.path);
    //}
  };

  const handleClick = (btn) => {
    setButtonId(btn.id);
    if (btn.isRedirect) {
      changeRoute(btn);
      setToggle(false);
    } else {
      setToggle(!toggle);
    }
  };

  const getToolBarButtons = () => {
    if (buttonId === "modules") {
      return toolbarButtons.splice(0, 1);
    }
    return toolbarButtons;
  };
  return (
    <>
      <div className="side-nav">
        <SideNavList items={items} onClick={handleClick} />
      </div>
      <SideNavSlider toggle={toggle} toolbarButtons={getToolBarButtons()} />
    </>
  );
};
export default SideNav;
