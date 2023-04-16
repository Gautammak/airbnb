import React from "react";
import "./App.css";
import Home from "../src/component/Home/Home";
import Header from "./component/Header/Header";
import Show from "./component/Show/Show";
import Footer from "./component/Footer/Footer";
import Filter1 from "./component/Filter/Filter1";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Show />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
