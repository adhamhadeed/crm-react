import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SideNavSlider from "./SideNavSlider";
import SideNavList from "./SideNavList";
import { useGlobalContext } from "../../../context/SideNavContext";

const SideNav = (props) => {
  const history = useHistory();
  const { setView: setIsSiteView, items } = useGlobalContext();
  const [toggle, setToggle] = useState(false);

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
  //     toolbarButtons: [
  //       {
  //         id: "close",
  //         label: "Close",
  //         icon: "fa fa-times",
  //         //  onClick: (e) => this.handleCloseButton(e),
  //       },
  //       {
  //         id: "add",
  //         label: "Add",
  //         icon: "fa fa-plus",
  //         // onClick: (e) => this.handleAddButton(e),
  //       },
  //       {
  //         id: "edit",
  //         label: "Edit",
  //         icon: "fa fa-pencil",
  //         //  onClick: (e) => this.handleEditButton(e),
  //       },
  //       {
  //         id: "delete",
  //         label: "Delete",
  //         icon: "fa fa-trash",
  //         // onClick: (e) => this.handleDeleteButton(e),
  //       },
  //     ],
  //   };
  // }

  // hanldeDataClick = (btn) => {
  //   if (["examples", "components"].includes(btn.id)) {
  //     this.toggleMenu(btn);
  //   } else {
  //     this.changeRoute(btn);
  //   }
  // };
  // handleCloseButton = (e) => {
  //   this.setState({ slideIn: false });
  // };
  // handleAddButton = (e) => {
  //   console.log("add");
  // };
  // handleEditButton = (e) => {
  //   console.log("edit");
  // };
  // handleDeleteButton = (e) => {
  //   console.log("delete");
  // };
  const toggleMenu = (btn) => {
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
  };

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
    if (btn.isRedirect) {
      changeRoute(btn);
      setToggle(false);
    } else {
      toggleMenu(btn);
    }
  };

  return (
    <div className="side-nav">
      <SideNavList items={items} onClick={handleClick} />
      <SideNavSlider />
    </div>
  );
};
export default SideNav;
