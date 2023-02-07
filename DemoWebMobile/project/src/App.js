import React from "react";
import "../src/chair/SlideShow";
import SlideShow from "../src/chair/SlideShow";
import { Route, Routes } from "react-router-dom";
import Home from "./products/Products";

const App = () => {
  return (
    <div>
      <SlideShow />
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
