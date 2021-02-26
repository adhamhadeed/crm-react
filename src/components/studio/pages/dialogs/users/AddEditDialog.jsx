import React, { useState } from "react";
import Button from "../../../../common/controls/Button";
import Dialog from "../../../../common/dialogs/Dialog";
import AddEditForm from "./AddEditForm";

const AddEditDialog = (props) => {
  const { onSave, close, editableUser } = props;
  const [submit, setSubmit] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    if (submit) {
      submit.current();
    }
  };

  const buttons = [
    {
      id: "okbtn",
      label: !editableUser ? "add user" : "edit user",
      icon: "fa fa-user-plus",
      onClick: submitForm,
    },
    {
      id: "nobtn",
      label: "cancel",
      icon: "fa fa-undo",
      warning: true,
      onClick: close,
    },
  ];
  return (
    <Dialog
      title={!editableUser ? "Add New User" : "Edit User"}
      buttons={buttons}
      render={() => {
        return buttons.map((btn) => <Button key={btn.id} {...btn} />);
      }}
      {...props}
    >
      <AddEditForm data={editableUser} setSubmit={setSubmit} onSave={onSave} />
    </Dialog>
  );
};

export default AddEditDialog;
