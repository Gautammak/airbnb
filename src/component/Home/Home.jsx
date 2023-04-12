import React from "react";

import "./Home.css";
import Filter1 from "../Filter/Filter1";

import Userdata from "../userData/userData";

function Home() {
  return (
    <div className="home">
      <Filter1 />
      <Userdata />
    </div>
  );
}

export default Home;
