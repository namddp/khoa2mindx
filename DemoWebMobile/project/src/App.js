import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header"

const App = () => {
  return (
    <div>
      <Header />
      {/* <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
