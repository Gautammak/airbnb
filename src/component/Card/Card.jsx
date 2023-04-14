// import { Favorite, Star } from "@material-ui/icons";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";

// import "./Card.css";

// function Card({ src, city, description, date, price, currency, timing }) {
//   return (
//     // <div className="card_set">
//     <div className="card">
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img className="img" src={src} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="img" src={src} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img classname="img" src={src} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="img" src={src} alt="" />
//         </SwiperSlide>
//         <div className="heart">
//           <Favorite />
//         </div>
//         <div className="card_info">
//           <div className="city">
//             <p> {city}</p>
//             <div className="start">
//               <Star />
//               <p>5</p>
//             </div>
//           </div>

//           <div className="info">
//             <p> {description}</p>
//             <p> {date}</p>
//             <p> {price}</p>
//             <p> {currency}</p>
//             <p> {timing}</p>
//           </div>
//         </div>
//       </Swiper>
//     </div>
//     //   </div>
//   );
// }

// export default Card;

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
