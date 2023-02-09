import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header"
import RunningText from "./header/RunningText"
import Policy from "./policy/Policy";
import SlideBanner from "./slidebanner/SlideBanner"
const App = () => {
  return (
    <div>
      <RunningText/>
      <Header />
      <hr/>
      <SlideBanner/>
      <Policy/>
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
