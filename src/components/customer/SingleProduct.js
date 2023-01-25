import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../../css/single-product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxToolkit/cart/cart";

function SingleProduct() {
  const params = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        const product = res.data;
        setProduct({
          id: product.id,
          title: product.title,
          description: product.description,
          image: product.image,
          price: product.price,
          category: product.category,
        });
      })
      .catch((err) => console.log(err));
  }, [params]);
  return (
    <div className="single-prod text-center">
      <h1 className="title text-center">{product.title}</h1>
      <div className="body col-12 col-sm-6">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="text">
          <p className="description">Description : {product.description}</p>
          <div className="cat-price">
            <h2 className="category">Category : {product.category}</h2>
            <h2 className="price">Price : {product.price}$</h2>
          </div>
          <NavLink className="btn btn-primary w-50 mx-auto" to={"/"}>
            Go Back
          </NavLink>
          <button
            onClick={() => dispatch(cartActions.addToCart(product))}
            className="btn btn-warning text-light w-50 mx-auto"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
