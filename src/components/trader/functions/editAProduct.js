// import axios from "axios";
import { editProduct } from "../../../firebase";

const editFunction = async (product, navigate) => {
  // axios
  //   .put(`http://localhost:8080/products/${id}`, {

  await editProduct(product.id, {
    productId: product.productId,
    title: product.title,
    image: product.image,
    category: product.category,
    price: product.price,
    description: product.description,
  }).then((res) => {
    navigate("/products");
  });
};
export default editFunction;
