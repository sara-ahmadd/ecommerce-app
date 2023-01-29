import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

import { getOneProduct } from "../../firebase";

function ProductDetails() {
  const navigate = useNavigate();
  const { productId, id } = useParams();
  const [data, setData] = useState({
    loading: true,
    product: {},
    error: "",
  });
  useEffect(() => {
    getOneProduct(id)
      .then((res) =>
        setData({
          loading: false,
          product: res,
          error: "",
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1 className="text-primary">Product Details</h1>
      <h1 className="text-primary">ID : {productId}</h1>
      {data.product && (
        <div
          key={data.product.id}
          className="card mb-3 px-2 gap-4"
          style={{ width: "100%", height: "60%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.product.image}
                className="img-fluid rounded-start"
                style={{ width: "100%", marginTop: "20%", height: "70%" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{data.product.title}</h3>
                <div className="card-text">
                  <p className="py-3 fs-4">
                    Category : {data.product.category}
                  </p>
                  <p className="py-3 fs-4 text-primary">
                    Price : {data.product.price}$
                  </p>
                  <p className="py-3 fs-4">{data.product.description}</p>
                </div>
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                  className="btn btn-primary"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
