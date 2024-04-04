import React from "react";

import "./App.css";
import OurProducts from "./OurProducts";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="Body">
        <NavBar />
        <OurProducts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
