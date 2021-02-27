import React from "react";
import Dialog from "./Dialog";
import Button from "../controls/Button";

const ConfirmationDialog = (props) => {
  const { onConfirm, msg, buttons } = props.confirmationDialog;
  if (onConfirm && typeof onConfirm === "function")
    buttons[0].onClick = onConfirm;

  return (
    <Dialog
      render={(buttons) => {
        return buttons.map((btn) => <Button key={btn.id} {...btn} />);
      }}
      {...props.confirmationDialog}
      {...props}
    >
      {msg}
    </Dialog>
  );
};

export default ConfirmationDialog;
