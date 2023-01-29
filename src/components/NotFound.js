import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Page Is Not Found</h1>
      <Link to={"/"} className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;
