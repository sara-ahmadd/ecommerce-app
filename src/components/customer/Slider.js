import React from "react";
import "../../css/slider.css";
import image from "../../images/image-1.jpg";
function Slider(props) {
  const products = Array.from(props.products);
  return (
    <div className="text-center">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner my-4">
          <div key={Date.now()} className="carousel-item active">
            <img
              src={image}
              alt="img"
              style={{ width: "600px", height: "500px" }}
            />
          </div>
          {products.map((prod) => {
            return (
              <div key={prod.id} className="carousel-item">
                <img
                  src={prod.images[0]}
                  alt="img"
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
            );
          })}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next p-4"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
