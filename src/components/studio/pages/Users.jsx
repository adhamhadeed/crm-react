import React, { useEffect, useState } from "react";
import UserService from "./../../../services/UserService";
import Boxes from "./../../common/boxes/Boxes";
import UserTable from "./../tables/UserTable";
import Loading from "./../../common/Loading";
import PageHeader from "./../../common/PageHeader";

const header = "users";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const boxes = [
    { id: 1, icon: "fa fa-users", label: "Total Users" },
    { id: 2, icon: "fa fa-user", label: "Regular User" },
    { id: 3, icon: "fa fa-user-secret", label: "Admin Users" },
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
        <>
          <PageHeader icon="fa fa-users" header={header} />
          <div className="page-layout">
            <Boxes list={boxes} />
            <UserTable
              data={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Users;
