import React from "react";
import Table from "./../../common/Table";
import Button from "./../../common/Button";

const UserTable = ({ data, editUser, deleteUser }) => {
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
          {" "}
          {/* <Button icon="fa fa-trash " danger onClick={() => onDelete(row.id)} /> */}
          <i className="fa fa-trash" onClick={() => onDelete(row.id)}></i>
          <i className="fa fa-pencil" onClick={() => editUser(row)}></i>
          {/* <Button
            displayAsIcon
            icon="fa fa-pencil "
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
  const onColumnResize = (row, col) => {
    console.log(row, col);
  };

  return (
    <div className="custom-table">
      <Table data={data} columns={columns} onColumnResize={onColumnResize} />
    </div>
  );
};

export default UserTable;
