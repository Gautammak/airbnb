import { Star } from "@material-ui/icons";
import React from "react";
import "./Card.css";

function Card({ src, city, description, date, price }) {
  return (
    <div className="card_set">
      <div className="card">
        <img classname="img" src={src} alt="" />

        <div className="card_info">
          <div className="city">
            <p> {city}</p>
            <div className="start">
              <p> 5</p>
              <Star />
            </div>
          </div>

          <div className="description">
            <p> {description}</p>
          </div>
          <div className="date">
            <p> {date}</p>
          </div>
          <div className="price">
            <p> {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
