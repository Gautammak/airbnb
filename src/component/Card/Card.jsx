import { Favorite, Star } from "@material-ui/icons";
import React from "react";

import "./Card.css";

function Card({ src, city, description, date, price, currency, timing }) {
  return (
    // <div className="card_set">
    <div className="card">
      <div className="heart">
        <Favorite />
      </div>

      <img classname="img" src={src} alt="" />

      <div className="card_info">
        <div className="city">
          <p> {city}</p>
          <div className="start">
            <Star />
            <p>5</p>
          </div>
        </div>

        <div className="info">
          <p> {description}</p>
          <p> {date}</p>
          <p> {price}</p>
          <p> {currency}</p>
          <p> {timing}</p>
        </div>
      </div>
    </div>
    //   </div>
  );
}

export default Card;
