import React from "react";
import { Link } from "react-router-dom";
import "../../css/Sidebar.css";
function Sidebar() {
  return (
    <div>
      <ul className="nav flex-colum w-100">
        <li className="nav-item w-100 h-50 mb-2">
          <Link className="myBtn" to="/products">
            Get All Products
          </Link>
        </li>
        <li className="nav-item h-50 w-100">
          <Link className="myBtn" to={"/products/add"}>
            Add New Product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
