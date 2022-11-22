// import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../App";
import { addProduct } from "../../firebase";
import Form from "./Form";
import getAllProducts from "./functions/getAllProducts";

function AddNewProduct() {
  const [, setProducts] = useContext(productsContext);

  const [product, setProduct] = useState({
    productId: "",
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
  const addNewProduct = async () => {
    // axios
    //   .post("http://localhost:8080/products", {
    //     id: product.id,
    //     title: product.title,
    //     image: product.image,
    //     category: product.category,
    //     price: product.price,
    //     description: product.description,
    //   })
    await addProduct({
      productId: product.productId,
      title: product.title,
      image: product.image,
      category: product.category,
      price: product.price,
      description: product.description,
    }).then(() => {
      getAllProducts(setProducts);
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
