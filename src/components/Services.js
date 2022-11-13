import React from "react";
import { Link } from "react-router-dom";
import servicesImage from "../images/services.png";
function Services() {
  return (
    <div>
      <div className="card">
        <h5 className="card-header text-primary fs-2">Our Services</h5>
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque
            eos magnam facilis rerum voluptatum voluptas tempora quia deleniti
            facere, aliquam nihil error possimus illo dolor necessitatibus ex
            quisquam natus?
          </p>
          <div className="my-3">
            <img src={servicesImage} alt="img" />
          </div>
          <Link to={"/"} className="btn btn-primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
