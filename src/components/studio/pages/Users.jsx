import React, { useEffect, useState } from "react";
import UserService from "./../../../services/UserService";
import Boxes from "./../../common/boxes/Boxes";
import UserTable from "./../tables/UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const boxes = [
    { id: 1, icon: "fa fa-users" },
    { id: 2, icon: "fa fa-users" },
    { id: 3, icon: "fa fa-users" },
  ];

  const fetchUsers = async () => {
    try {
      const { data } = await UserService.getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addUser = async (user) => {
    const newUser = await UserService.addUser(user);
    setUsers(newUser, ...users);
  };
  const deleteUser = (userId) => {
    const usersList = users.filter((user) => user.id !== userId);
    setUsers(usersList);
  };
  const editUser = (userId) => {
    if (userId) {
      const index = users.findIndex((user) => user.id === userId);
      if (index > -1) {
        users[index] = { ...users[index] };
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="page">
      {!loading ? (
        <div className="page-layout">
          <Boxes list={boxes} />
          <UserTable data={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Users;
