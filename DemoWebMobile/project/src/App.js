import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import Header from "./components/header/Header";
import RunningText from "./components/header/RunningText";
import Footer from "./components/Footer/Footer";
import ProductsManage from "./components/AdminPanel/ProductsManage";
const App = () => {
  const [products, setProducts] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [careItems, setCareItems] = useState([]);

  return (
    <div>
      <RunningText />
      <Header careItems={careItems} checkItems={checkItems}/>
      <hr />
      <Home/>
      <Footer/>
      <ProductsManage products={products} setProducts={setProducts}/>
    </div>
  );
};

export default App;
