import axios from "axios";

const getAllProducts = (setProducts) => {
  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      const data = res.data;
      setProducts({
        loading: false,
        products: data,
        error: "",
      });
    })
    .catch((err) => {
      setProducts({
        loading: false,
        products: [],
        error: err.message,
      });
    });
};
export default getAllProducts;
