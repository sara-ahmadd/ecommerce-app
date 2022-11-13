import React from "react";
import logo from "../images/shop-icon.png";
import "../css/Logo.css";
function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-img">
        <img src={logo} alt="img" />
      </div>
      <h1 className="text-primary">MyStore</h1>
    </div>
  );
}

export default Logo;
