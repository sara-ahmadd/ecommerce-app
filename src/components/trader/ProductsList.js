import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import getAllProducts from "./functions/getAllProducts";
import deleteProduct from "./functions/deleteAProduct";

function ProductsList() {
  const [products, setProducts] = useState({
    loading: true,
    products: [],
    error: "",
  });

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <div>
      <h1 className="text-primary">Products</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <td className="fs-2">ID</td>
            <td className="fs-2">Product</td>
            <td className="fs-2">Category</td>
            <td className="fs-2">Price</td>
            <td className="fs-2">Operation</td>
          </tr>
        </thead>
        <tbody>
          {products.loading && (
            <tr>
              <td className="fs-1">Loading....</td>
            </tr>
          )}
          {products.products ? (
            products.products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.price}$</td>
                <td className="d-flex gap-3 pb-4">
                  <Link
                    to={`/products/edit/${p.id}`}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                  <Link to={`/products/${p.id}`} className="btn btn-primary">
                    View
                  </Link>
                  <button
                    onClick={() => {
                      deleteProduct(p);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="fs-3">No Products To Show..🙁</tr>
          )}
          {products.error && (
            <tr>
              <td>Somthing Went Wrong!..</td>
            </tr>
          )}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}

export default ProductsList;
