import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
function AddNewProduct() {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();
  const onChangeValue = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const addNewProduct = () => {
    axios
      .post("http://localhost:8080/products", {
        id: product.id,
        title: product.title,
        image: product.image,
        category: product.category,
        price: product.price,
        description: product.description,
      })
      .then((data) => {
        navigate("/products");
      });
  };
  return (
    <>
      <Form
        product={product}
        setProduct={setProduct}
        submitionFunction={addNewProduct}
        changeFunction={onChangeValue}
        formTitle={"Add A New Product"}
      />
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-primary"
      >
        Go Back
      </button>
    </>
  );
}

export default AddNewProduct;
