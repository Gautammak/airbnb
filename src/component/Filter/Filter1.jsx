import React, { useState } from "react";

import { links } from "../Assets/images-links";
import "./Filter.css";

function Filter1() {
  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <div className="filter-div container">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selected key");
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} alt="image" className="links-img" />
          <p
            className={`links-label ${
              i === selectedFilter && "selected-label"
            }`}
          >
            {item.label}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter1;

// import { CastOutlined, FilterFrames, ViewAgenda } from "@material-ui/icons";

// import React from "react";
// import "./Filter.css";
// function Filter1() {
//   return (
//     <div className="filter">
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <CastOutlined />
//       <FilterFrames />
//       <CastOutlined />
//       <ViewAgenda />
//     </div>
//   );
// }

// export default Filter1;
