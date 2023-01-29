import Swal from "sweetalert2";
// import getAllProducts from "./getAllProducts";
import { deleteSingleProduct } from "../../../firebase";

const deleteProduct = (product) => {
  Swal.fire({
    title: `You Will Delete This Product : [ ${product.title} ], Are You Sure?`,
    showCancelButton: true,
  }).then((res) => {
    if (res.isConfirmed) {
      // fetch(`http://localhost:8080/products/${product.id}`, {
      //   method: "delete",
      // })
      return deleteSingleProduct(product.id);
    }
  });
};

export default deleteProduct;
