import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../css/Navbar.css";

function Navbar({ setCustomer }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <NavLink className="navbar-brand" to="/">
          <Logo />
        </NavLink>
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
        <div
          className="collapse navbar-collapse offset-6"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link  fs-5 " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link  fs-5 "
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link  fs-5 "
                aria-current="page"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="btns d-flex my-2 justify-content-center w-100  gap-3">
                <button
                  onClick={(e) => setCustomer(true)}
                  className="btn btn-primary"
                >
                  Customer
                </button>
                <button
                  onClick={(e) => setCustomer(false)}
                  className="btn btn-primary"
                >
                  Trader
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
