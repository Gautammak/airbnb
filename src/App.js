import React from "react";
import "./App.css";
import Home from "../src/component/Home/Home";
import Header from "./component/Header/Header";
import Show from "./component/Show/Show";

function App() {
  return (
    <div className="App">
      <Show />

      <Header />
      <hr></hr>
      <Home />
    </div>
  );
}

export default App;
