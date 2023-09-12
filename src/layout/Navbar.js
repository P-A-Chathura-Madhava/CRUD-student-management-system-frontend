import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Turn a into a Link */}
          {/* <a className="navbar-brand" href="#">Student Management App</a> */}
          <Link className="navbar-brand" to="/">
            Student Management App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Turn button into a Link when routing */}
          {/* <button className='btn btn-outline-light'>Add Student</button> */}
          <Link className="btn btn-outline-light" to="/addStudent">
            Add Student
          </Link>
        </div>
      </nav>
    </div>
  );
}
