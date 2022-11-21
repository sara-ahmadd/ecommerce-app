// import axios from "axios";
import { getProducts } from "../../../firebase";

const getAllProducts = (setProducts) => {
  // axios
  //   .get("http://localhost:8080/products")
  getProducts
    .then((res, rej) => {
      if (res) {
        const data = res;
        setProducts({
          loading: false,
          products: data,
          error: "",
        });
      }
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
