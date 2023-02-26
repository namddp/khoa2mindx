import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import RunningText from "./components/header/RunningText";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/ShowProducts/AllProducts/AllProducts";
import ProductsManage from "./components/AdminPanel/ProductsManage";
import DetailsProducts from "./components/ShowProducts/Details/DetailsProducts";
const App = () => {
  const [products, setProducts] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [careItems, setCareItems] = useState([]);

  return (
    <div>
      <RunningText />
      <Header careItems={careItems} checkItems={checkItems} />
      <hr />
      <Routes>
        <Route path="/Sanpham" element={<AllProducts />} />
        <Route path="/Chitietsanpham" element={<DetailsProducts />} />
        <Route
          path="/manage"
          element={
            <ProductsManage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/"
          element={
            <Home
              products={products}
              checkItems={checkItems}
              setCareItems={setCareItems}
              setProducts={setProducts}
              setCheckItems={setCheckItems}
              careItems={careItems}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
