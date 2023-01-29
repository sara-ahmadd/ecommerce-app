import Home from "./components/admin/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/admin/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductsList from "./components/admin/ProductsList";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AddNewProduct from "./components/admin/AddNewProduct";
import ProductDetails from "./components/admin/ProductDetails";
import EditProduct from "./components/admin/EditProduct";
import { createContext, useState } from "react";
import Products from "./components/customer/Products";
import SingleProduct from "./components/customer/SingleProduct";
import Cart from "./components/customer/Cart";
import NotFound from "./components/NotFound";

export const productsContext = createContext();

function App() {
  const [products, setProducts] = useState({
    loading: true,
    products: [],
    error: "",
  });

  const [customer, setCustomer] = useState(false);

  return (
    <productsContext.Provider value={[products, setProducts]}>
      <div className="App">
        <Navbar customer={customer} setCustomer={setCustomer} />
        {!customer && (
          <div className="row d-flex gap-2">
            <div className="col-6 col-sm-2 mx-auto mx-sm-0">
              <Sidebar />
            </div>
            <div className="col-12 col-sm-9 mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Outlet />}>
                  <Route path="" element={<ProductsList />} />
                  <Route path="edit/:id" exact element={<EditProduct />} />
                  <Route path="add" exact element={<AddNewProduct />} />
                  <Route
                    path=":productId/:id"
                    exact
                    element={<ProductDetails />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        )}

        {customer && (
          <div className="row d-flex gap-2 p-4">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
          </div>
        )}
        <Footer />
      </div>
    </productsContext.Provider>
  );
}

export default App;
