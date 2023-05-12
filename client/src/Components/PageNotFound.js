import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div
        class="d-flex align-items-center justify-content-center bg-primary"
        style={{ height: "100vh", }}
      >
        <h1 class="display-1 fw-bold text-white">404 Page Not Found</h1>
        <Link to="/">
          <button
            style={{ marginLeft: "50px", marginTop: "15px" }}
            className="btn btn-danger rounded-0 mb-2"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
