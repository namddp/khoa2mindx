import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import DailyDeal from "./components/DailyDeal/DailyDeal";
import Header from "./header/Header";
import RunningText from "./header/RunningText";
import Policy from "./policy/Policy";
import SlideBanner from "./slidebanner/SlideBanner";
import ListIpads from "./components-ipad/list-ipad";
const App = () => {
  return (
    <div>
      <RunningText />
      <Header />
      <hr />
      <SlideBanner />
      <Policy />
      {/* <DailyDeal/> */}
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
      <ListIpads />
    </div>
  );
};

export default App;
