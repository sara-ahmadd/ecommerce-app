import Home from "./components/trader/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/trader/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductsList from "./components/trader/ProductsList";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AddNewProduct from "./components/trader/AddNewProduct";
import ProductDetails from "./components/trader/ProductDetails";
import EditProduct from "./components/trader/EditProduct";
import { useState } from "react";
import Products from "./components/customer/Products";
import SingleProduct from "./components/customer/SingleProduct";
function App() {
  const [customer, setCustomer] = useState(false);
  return (
    <div className="App ">
      <Navbar customer={customer} setCustomer={setCustomer} />

      {!customer && (
        <div className="row d-flex gap-2">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Outlet />}>
                <Route path="" element={<ProductsList />} />
                <Route path="edit/:id" exact element={<EditProduct />} />
                <Route path="add" exact element={<AddNewProduct />} />
                <Route path=":id" exact element={<ProductDetails />} />
              </Route>
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
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
