import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DailyDeal from "./DailyDeal/DailyDeal";
import Policy from "./policy/Policy";
import SlideBanner from "./slidebanner/SlideBanner";
import ListIpads from "../../components-ipad/list-ipad";
const Home = (props) => {
  const {products, setProducts,checkItems, 
    setCheckItems,careItems, setCareItems} = props

  useEffect(() => {
    fetch("https://63f3daa4864fb1d6001eedae.mockapi.io/api/products", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((it) => {
        setProducts(it);
        console.log(it);
      });
  }, []);
  return (
    <div>
      
      <SlideBanner />
      <Policy />
      <DailyDeal
        products={products}
        checkItems={checkItems}
        setCareItems={setCareItems}
        setProducts={setProducts}
        setCheckItems={setCheckItems}
        careItems={careItems}
      />
      <ListIpads />
    </div>
  );
};

export default Home;
