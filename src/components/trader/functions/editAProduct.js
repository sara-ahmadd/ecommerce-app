import axios from "axios";

const editFunction = (product, id, navigate) => {
  axios
    .put(`http://localhost:8080/products/${id}`, {
      id: product.productId,
      title: product.title,
      image: product.image,
      category: product.category,
      price: product.price,
      description: product.description,
    })
    .then((res) => {
      navigate("/products");
    });
};
export default editFunction;
