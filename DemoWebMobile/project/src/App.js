import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DailyDeal from "./components/DailyDeal/DailyDeal";
import Header from "./components/header/Header";
import RunningText from "./components/header/RunningText";
import Policy from "./components/policy/Policy";
import SlideBanner from "./components/slidebanner/SlideBanner";
import ListIpads from "./components-ipad/list-ipad";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/ShowProducts/AllProducts/AllProducts";
import ProductsManage from "./components/AdminPanel/ProductsManage";
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
      <SlideBanner />
      <Policy />
      <DailyDeal/>
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
      <ListIpads />
      <Footer/>
      <ProductsManage/>
    </div>
  );
};

export default App;
