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
import CheckItem from "./components/CheckItem/CheckItem";
import CareItems from "./components/CareItems/CareItems";
const App = () => {
  const [products, setProducts] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [careItems, setCareItems] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
    fetch('https://63f3daa4864fb1d6001eedae.mockapi.io/api/products', {
  method: 'GET',
  headers: {'content-type':'application/json'},
})
    .then(res => {
      if (res.ok) {
          return res.json();
      }}
    )
    .then(it => {setProducts(it)
          console.log(it)
    })
  }, []);
  const handleSelectLove = (id) => {
    setCareItems(prev => [...prev,products[id]])
    console.log(careItems)
}
const handleSelectCheck = (id) => {
    setCheckItems(prev => [...prev,products[id]])
    console.log(checkItems)
}
  return (
    <div>
      <RunningText />
      <Header careItems={careItems} checkItems={checkItems} />
      <hr />
      <Routes>
        <Route path="/Sanpham" element={<AllProducts />} />
        <Route path="/Chitietsanpham" element={<DetailsProducts />} />
        <Route path="/checkitems" element={<CheckItem checkItems={checkItems} setCheckItems={setCheckItems}/>} />
        <Route path="/careitems" element={<CareItems careItems={careItems} setCareItems={setCareItems}/>} />
        <Route path="/cart" element={<CareItems cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route
          path="/manage"
          element={
            <ProductsManage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/"
          element={
            <Home products={products} handleSelectCheck={handleSelectCheck}
              handleSelectLove={handleSelectLove} checkItems={checkItems} setCareItems={setCareItems}
              setProducts={setProducts} setCheckItems={setCheckItems} careItems={careItems}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
