import React, { useState } from "react";
import { ConfirmationDialog } from "../../../common/dialogs/Index";
import Table from "../../../common/Table";

const UserTable = (props) => {
  const { data, editUser, deleteUser } = props;
  const [confirmationDialog, setConfirmationDialg] = useState({
    open: false,
    title: "Delete User",
    msg: "Are you sure you want to delete this user?",
    buttons: [
      {
        id: "okbtn",
        label: "Delete User",
        icon: "fa fa-user-times",
        onClick: () => confirmDelete(),
      },
      {
        id: "nobtn",
        label: "cancel",
        icon: "fa fa-undo",
        warning: true,
        onClick: () => closeConfirmationDialog(),
      },
    ],
  });

  const columns = [
    {
      key: "name",
      name: "Full Name",
      formatter: ({ row }) => `${row.name.firstname} ${row.name.lastname} `,
      width: 150,
      frozen: true,
    },
    {
      key: "username",
      name: "User Name",
      sortable: true,
      width: 150,
    },
    {
      key: "address",
      name: "Address",
      sortable: true,
      formatter: ({ row }) =>
        `${row.address.city}, ${row.address.street} ${row.address.zipcode}`,
    },
    { key: "email", name: "Email", sortable: true, resizable: true },
    { key: "phone", name: "Phone", sortable: true },
    { key: "id", name: "Active", formatter: (row) => "active" },
    {
      key: "action",
      width: 60,
      name: "",

      formatter: (row) => (
        <div className="action-button">
          <i
            className="fa fa-trash"
            onClick={(e) => {
              setConfirmationDialg({
                ...confirmationDialog,
                open: true,
                onConfirm: (e) => confirmDelete(row),
              });
            }}
          ></i>
          <i className="fa fa-pencil" onClick={(e) => editUser(row)}></i>
        </div>
      ),
    },
  ];

  const confirmDelete = ({ row }) => {
    setConfirmationDialg({
      ...confirmationDialog,
      open: false,
    });
    deleteUser(row);
  };

  const onColumnResize = (row, col) => {
    console.log(row, col);
  };
  const closeConfirmationDialog = () => {
    setConfirmationDialg({ ...confirmationDialog, open: false });
  };

  return (
    <>
      <div className="custom-table">
        <Table data={data} columns={columns} onColumnResize={onColumnResize} />
      </div>

      <ConfirmationDialog
        confirmationDialog={confirmationDialog}
        setConfirmationDialg={setConfirmationDialg}
        close={() => closeConfirmationDialog()}
      />
    </>
  );
};

export default UserTable;
