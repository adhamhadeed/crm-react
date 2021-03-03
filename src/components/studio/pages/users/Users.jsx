import React, { useState } from "react";
import UserService from "../../../../services/UserService";
import Boxes from "../../../common/boxes/Boxes";
import UserTable from "./UserTable";
import Loading from "../../../common/Loading";
import useFetch from "../../../../customHooks/useFetch";
import { toast } from "react-toastify";
import AddEditDialog from "./AddEditDialog";
import {
  TemplateHeader,
  TemplateContent,
} from "./../../../common/template/Index";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse, isLoading, errors] = useFetch(
    UserService.getUsers,
    "users",
    []
  );
  const [editableUser, setEditableUser] = useState(null);

  const toolbarButtons = [
    {
      id: "add",
      label: "New User",
      icon: "fa fa-user-plus",
      onClick: () => addNewUser(),
    },
  ];

  const boxes = [
    { id: 1, icon: "fa fa-users", label: "Total Users" },
    { id: 2, icon: "fa fa-user", label: "Regular User" },
    { id: 3, icon: "fa fa-user-secret", label: "Admin Users" },
  ];

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const addNewUser = () => {
    setEditableUser(null);
    openDialog();
  };

  const saveUser = (user) => {
    console.log(user);
    closeDialog();
  };

  const deleteUser = (user) => {
    if (user) {
      const users = response.filter((usr) => usr.id !== user.id);
      setResponse(users);
      toast.info("Great! User deleted successfully!");
    }
  };

  const editUser = (user) => {
    setEditableUser(user.row);
    openDialog();
  };
  if (errors) return <div>Error during process...</div>;
  return (
    <>
      {!isLoading ? (
        <>
          <TemplateHeader
            icon="fa fa-users"
            header="users"
            toolbarButtons={toolbarButtons}
          />
          <TemplateContent>
            <Boxes list={boxes} />
            <UserTable
              data={response}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </TemplateContent>
        </>
      ) : (
        <Loading />
      )}
      <AddEditDialog
        editableUser={editableUser}
        open={open}
        close={closeDialog}
        onSave={saveUser}
      />
    </>
  );
};

export default Users;
