import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

const SocialCard = () => {
  return (
    <div className="socialcard">
      <div className="socialcard-Logo-Container">
        <img src="null" alt="DEV_COOL_LOGO" />
      </div>
      <h2 className="socialcard-main-topic">Learning React? Start Small.</h2>
      <div className="socialcard-credits">
        <img src="null" alt="Dave Ceddia" />
        <p>
          <a href="#">@dcedia</a>
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
