import React, { useState } from "react";
import UserService from "../../../../services/UserService";
import Boxes from "../../../common/boxes/Boxes";
import UserTable from "./UserTable";
import Loading from "../../../common/Loading";
import useFetch from "../../../../customHooks/useFetch";
import PageHeader from "./../../../common/PageHeader";
import { toast } from "react-toastify";

const Users = () => {
  const [response, setResponse, isLoading, errors] = useFetch(
    UserService.getUsers,
    "users",
    []
  );
  // const [editableUser, setEditableUser] = useState(null);

  const toolbarButtons = [
    {
      id: "add",
      label: "New User",
      icon: "fa fa-user-plus",
      //onClick: () => openDialog(),
    },
  ];
  const boxes = [
    { id: 1, icon: "fa fa-users", label: "Total Users" },
    { id: 2, icon: "fa fa-user", label: "Regular User" },
    { id: 3, icon: "fa fa-user-secret", label: "Admin Users" },
  ];

  const saveUser = (user) => {
    console.log(user);
  };

  const deleteUser = (user) => {
    if (user) {
      const users = response.filter((usr) => usr.id !== user.id);
      setResponse(users);
      toast.info("User delete successfully!");
    }
  };

  const editUser = (user) => {
    // setEditableUser(user.row);
    // openDialog();
  };
  if (errors) return <div>Error during process...</div>;
  return (
    <>
      {!isLoading ? (
        <div className="page">
          <PageHeader
            icon="fa fa-users"
            header="users"
            toolbarButtons={toolbarButtons}
          />
          <div className="page-layout">
            <Boxes list={boxes} />
            <UserTable
              data={response}
              deleteUser={deleteUser}
              editUser={editUser}
              saveUser={saveUser}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {/* <AddEditDialog
        editableUser={editableUser}
        open={isOpen}
        close={closeDialog}
        onSave={addUser}
      /> */}
    </>
  );
};

export default Users;
