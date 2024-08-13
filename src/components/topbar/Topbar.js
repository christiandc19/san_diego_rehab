import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar" name="top">
      <div className="topbar-content container">
        <div className="address bar-box1">
          <p>430 Nutmeg Street Suite 200, San Diego, Ca 92103</p>
        </div>

        <div className="email bar-box2">
          <p>info@SanDiegoRehab.biz</p>
        </div>

        <div className="number bar-box3">
          <p> +1 (323) 576-6689</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
