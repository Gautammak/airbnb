import React from "react";

import "./Home.css";

import Filter1 from "../Filter/Filter1";
// import Userdata1 from "../userData/Userdata1";
import Userdata from "../userData/Userdata";

// import Userdata from "../userData/userData";
// import userdata1 from "../userData"

function Home() {
  return (
    <div className="container">
      <Filter1 />
      <Userdata />
    </div>
  );
}

export default Home;
