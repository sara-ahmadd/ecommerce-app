import React from "react";
import img from "../images/services.png";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer bg-light mt-4">
      <div className="left-section w-50 p-2">
        <ul className="footer-list">
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <p>Our Location</p>
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i>
            <p>+ 010 230 555</p>
          </li>
          <li>
            <i className="bi bi-envelope-at-fill"></i>
            <p className="fw-bolder text-primary">email@MyStore.com</p>
          </li>
        </ul>
      </div>
      <div className="right-section  w-50 p-2">
        <div className="title">
          <div className="image-container">
            <img src={img} alt="img" />
          </div>
          <h2 className="text-primary">MyStore</h2>
        </div>
        <p className="p-2 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque
          eos magnam facilis rerum voluptatum voluptas tempora quia deleniti
          facere,
        </p>
        <ul className="footer-list d-flex flex-row gap-4">
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-linkedin"></i>
          </li>
          <li>
            <i className="bi bi-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
