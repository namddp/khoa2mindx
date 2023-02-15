import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DailyDeal from "./components/DailyDeal/DailyDeal";
import Header from "./components/header/Header";
import RunningText from "./components/header/RunningText";
import Policy from "./components/policy/Policy";
import SlideBanner from "./components/slidebanner/SlideBanner";
import ListIpads from "./components-ipad/list-ipad";
import Footer from "./components/Footer/Footer";
import ProductsManage from "./components/AdminPanel/ProductsManage";
const App = () => {
  return (
    <div>
      <RunningText />
      <Header />
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
