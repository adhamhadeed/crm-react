import React, { useEffect, useState } from "react";
import Boxes from "./../../common/boxes/Boxes";
import UserService from "./../../../services/UserService";
import ProductService from "./../../../services/ProductService";
import axios from "axios";
import Loading from "./../../common/Loading";

function Dashboard(props) {
  const [data, setData] = useState({
    users: [],
    products: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const boxes = [
    { id: 1, icon: "fa fa-users", label: "Total Users" },
    { id: 2, icon: "fa fa-user", label: "Regular User" },
    { id: 3, icon: "fa fa-user-secret", label: "Admin Users" },
    { id: 4, icon: "fa fa-trash", label: "Global Users" },
  ];

  const fetchData = async () => {
    setIsLoading(true);
    const getUsers = UserService.getUsers();
    const getProducts = ProductService.getProducts();
    try {
      await axios
        .all([
          getUsers,
          getUsers,
          getUsers,
          getUsers,
          getProducts,
          getProducts,
          getProducts,
          getProducts,
        ])
        .then(
          axios.spread((...response) => {
            console.log(response);
          })
        );
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page">
      {isLoading && <Loading />}
      <div className="page-layout">
        <Boxes list={boxes} />
      </div>
    </div>
  );
}

export default Dashboard;
