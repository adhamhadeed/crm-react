import React from "react";
import Table from "./../../common/Table";

const UserTable = ({ data, editUser, deleteUser }) => {
  const columns = [
    {
      selector: "name",
      name: "Full Name",
      cell: ({ name }) => `${name.firstname} ${name.lastname} `,
      width: "150px",
    },
    {
      selector: "username",
      name: "User Name",
      sortable: true,
      width: "150px",
    },
    {
      id: "address",
      name: "Address",
      sortable: true,
      cell: ({ address }) =>
        `${address.city}, ${address.street} ${address.zipcode}`,
    },
    { selector: "email", name: "Email", sortable: true },
    { selector: "phone", name: "Phone", sortable: true },
    { selector: "id", name: "Active", right: true, cell: (row) => "active" },
    {
      selector: "id",
      width: "80px",
      name: "",
      right: true,
      cell: (row) => (
        <div className="action-button">
          {" "}
          {/* <Button icon="fa fa-trash" danger onClick={() => onDelete(row.id)} /> */}
          <i className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
          {/* <Button
            displayAsIcon
            icon="fa fa-pencil"
            warning
            onClick={() => editUser(row)}
          /> */}
        </div>
      ),
    },
  ];

  const onDelete = (userId) => {
    window.confirm("are you want to delete this user") && deleteUser(userId);
  };

  return (
    <div className="custom-table">
      <Table data={data} columns={columns} selectableRows />
    </div>
  );
};

export default UserTable;
