import React from "react";

import Card from "../Card/Card";

import "./Userdata.css";
import Userdata1 from "./Userdata1";

function Userdata() {
  return (
    <div className="home_section ">
      {Userdata1.map((user) => {
        console.log(user);
        return (
          <Card
            src={user.src}
            city={user.city}
            description={user.description}
            date={user.date}
            price={user.price}
            currency={user.currency}
          />
        );
      })}
    </div>
  );
}

export default Userdata;
