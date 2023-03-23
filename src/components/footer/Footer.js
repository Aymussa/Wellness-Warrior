import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="text-center">
        <p className="p-footer">
          Wellness Warriors | © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
