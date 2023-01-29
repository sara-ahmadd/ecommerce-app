import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <img
        src={product.image}
        className="card-img-top my-2 mx-auto"
        style={{ width: "200px", height: "200px" }}
        alt="img"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title title">{product.title}</h3>
        <h3 className="card-title price">Price : {product.price}$</h3>
        <h3 className="card-title category">Category : {product.category}</h3>
        <p className="card-text description">{product.description}</p>
        <Link
          to={`/products/${product.id}`}
          className="btn btn-primary blue-bgc"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
