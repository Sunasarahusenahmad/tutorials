import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "./AddEdit.css";
// import "../App.css"
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const naviget = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => setState({ ...res.data[0] }));
  }, [id]);

  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("please fill - up the Name...");
    } else if (!email || !email.includes("@")) {
      toast.error("please fill - up the Email Address...");
    } else if (!contact) {
      toast.error("please fill - up the Contact Number...");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success(`${name} is Added Successfully...`);
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success(`${name} is Updated Successfully...`);
      }

      naviget("/", { replace: true });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your email..."
          value={email || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="contact">contact</label>
        <input
          type="number"
          maxLength="10"
          id="contact"
          name="contact"
          placeholder="Enter Your contact..."
          value={contact || ""}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
