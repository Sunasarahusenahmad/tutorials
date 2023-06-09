import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import "./View.css";
// import "../App.css"
import axios from "axios";

const View = () => {
  const [user, setuser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => setuser({ ...res.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Details</p>
        </div>
        <div className="container">
          <strong> ID : </strong>
          <span>{id}</span>
          <br />
          <br />

          <strong> Name : </strong>
          <span>{user.name}</span>
          <br />
          <br />

          <strong> Email : </strong>
          <span>{user.email}</span>
          <br />
          <br />

          <strong> Contact : </strong>
          <span>{user.contact}</span>
          <br />
          <br />

          <Link to="/">
            <div className="btn btn-secondary rounded-0">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
