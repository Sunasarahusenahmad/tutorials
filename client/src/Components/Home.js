import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setdata] = useState([]);
  const Getdata = async () => {
    const res = await axios.get("http://localhost:5000/api/get");
    setdata(res.data);
  };

  useEffect(() => {
    Getdata();
  }, []);

  // Remove User Code

  const deleteuser = (id) => {
    if (window.confirm("Are you sure you want to delete this user")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("User Removed Successfully...");
      setTimeout(() => Getdata(), 500);
    } 
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/adduser">
        <button
          style={{ marginLeft: "990px" }}
          className="btn btn-warning rounded-0 mb-2"
        >
          Add User
        </button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }} colSpan="3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr style={{ textAlign: "center" }} key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-primary rounded-0">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={() => deleteuser(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-secondary rounded-0">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
