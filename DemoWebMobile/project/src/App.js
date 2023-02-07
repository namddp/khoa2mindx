import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header"
import RunningText from "./header/RunningText"
const App = () => {
  return (
    <div>
      <RunningText/>
      <Header />
      <hr/>
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
