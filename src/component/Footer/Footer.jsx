import { Language } from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer container ">
      <div className="terms">
        2023 Airbnb, Inc.·PrivacyTermsSitemapCompany details·Destinations
      </div>

      <div className="lang">
        {" "}
        <Language />
        English(IN) ₹ INR Support & Resource ^
      </div>
    </div>
  );
}

export default Footer;
