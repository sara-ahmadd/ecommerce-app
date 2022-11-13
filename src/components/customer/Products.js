import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Categories from "./Categories";
// import Slider from "./Slider";
function Products() {
  const [product, setProduct] = useState({
    loading: true,
    ProductList: [],
    error: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  const getIntoCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setCategories(res.data);
        setProduct({
          loading: false,
          ProductList: res.data,
          error: "",
          category: "",
        });
      });
  };
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct({
          loading: false,
          ProductList: res.data,
          error: "",
          category: "",
        });
      })
      .catch((err) => {
        setProduct({
          loading: false,
          ProductList: [],
          error: err.message,
          category: "",
        });
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <p className="fs-5 text-muted text-center">Shop is fun</p>
      <h1 className="text-primary text-center">BROWSE OUR NEW COLLECTION</h1>
      <Categories getCategory={getIntoCategory} getAll={getAllProducts} />
      {/* <Slider products={product.ProductList} /> */}
      <div className="container ">
        <div className="row my-4 align-items-strech">
          {product.loading && (
            <>
              <h1>Loading...</h1>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          )}
          {product.ProductList &&
            product.ProductList.map((p) => (
              <div
                key={p.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
              >
                <Product key={p.id} product={p} />
              </div>
            ))}
          {product.error && <h1>Somthing Went Wrong!..'{product.error}'</h1>}
        </div>
      </div>
    </>
  );
}

export default Products;
