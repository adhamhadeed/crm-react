import React from "react";
import Dialog from "./Dialog";
import Button from "../controls/Button";

const InformationDialog = (props) => {
  const renderFooter = () => {
    return <Button label="OK" onClick={props.close} />;
  };
  return (
    <Dialog {...props} renderFooter={renderFooter}>
      {props.msg}
    </Dialog>
  );
};

export default InformationDialog;
