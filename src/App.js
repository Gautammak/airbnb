import React from "react";
import "./App.css";
import Home from "../src/component/Home/Home";
import Header from "./component/Header/Header";
import Show from "./component/Show/Show";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Show />

      <Header />
      <hr></hr>
      <Home />
      <button className="map"> Show map </button>
      <Footer />
    </div>
  );
}

export default App;
