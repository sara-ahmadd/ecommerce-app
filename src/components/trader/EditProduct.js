import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../firebase";
import editFunction from "./functions/editAProduct";

function EditProduct() {
  const [product, setProduct] = useState({
    productId: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // axios.get(`http://localhost:8080/products/${id}`).then((res) => {
    // const data = res.data;
    getProducts.then((res) => {
      console.log(res);
      const prod = res.find((product) => product.id === id);
      console.log(prod);
      setProduct({
        id: prod.id,
        productId: prod.productId,
        title: prod.title,
        image: prod.image,
        category: prod.category,
        price: prod.price,
        description: prod.description,
      });
    });
  }, [id]);

  const changeFunction = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2 className="text-center py-2 text-primary">Edit A Product</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editFunction(product, navigate);
        }}
      >
        <label>ID</label>
        <input
          type="text"
          value={product.productId}
          onChange={(e) => changeFunction(e)}
          name="productId"
        />
        <hr />
        <label>Name</label>
        <input
          type="text"
          value={product.title}
          onChange={(e) => changeFunction(e)}
          name="title"
        />
        <hr />
        <label>Image Link</label>
        <input
          type="text"
          value={product.image}
          onChange={(e) => changeFunction(e)}
          name="image"
        />
        <hr />
        <label>Category</label>
        <input
          type="text"
          value={product.category}
          onChange={(e) => changeFunction(e)}
          placeholder="Product category"
          name="category"
        />
        <hr />
        <label>Price</label>
        <input
          type="text"
          value={product.price}
          onChange={(e) => changeFunction(e)}
          placeholder="Product price"
          name="price"
        />
        <hr />
        <label>Description</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) => changeFunction(e)}
          name="description"
        />
        <input className="btn btn-primary mt-3" type="submit" value="Submit" />
      </form>
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

export default EditProduct;
