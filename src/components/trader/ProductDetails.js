import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    loading: true,
    product: {},
    error: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setProduct({
        loading: false,
        product: res.data,
        error: "",
      });
    });
  }, [id]);
  console.log(product);
  return (
    <div>
      <h1 className="text-primary">Product Details</h1>
      <h1 className="text-primary">ID : {id}</h1>
      {product.product && (
        <div
          key={product.product.id}
          className="card mb-3 px-2 gap-4"
          style={{ width: "100%", height: "60%" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.product.image}
                className="img-fluid rounded-start"
                style={{ width: "100%", marginTop: "30%", height: "60%" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{product.product.title}</h3>
                <div className="card-text">
                  <p className="py-3 fs-4">
                    Category : {product.product.category}
                  </p>
                  <p className="py-3 fs-4 text-primary">
                    Price : {product.product.price}$
                  </p>
                  <p className="py-3 fs-4">{product.product.description}</p>
                </div>
                <button
                  onClick={() => {
                    navigate(-1);
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
