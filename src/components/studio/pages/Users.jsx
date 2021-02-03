import React, { useEffect, useState } from "react";
import UsersService from "./../../../services/UsersService";
import Boxes from "./../../common/boxes/Boxes";

const Users = () => {
  const boxes = [
    { id: 1, icon: "fa fa-users" },
    { id: 2, icon: "fa fa-users" },
    { id: 3, icon: "fa fa-users" },
  ];
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await UsersService.getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="page">
      <div className="page-layout">
        <Boxes list={boxes} />
        <div className="table">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
