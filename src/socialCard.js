import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import dev from "./Images/dev.svg";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Asap Web:300,400,700", "sans-serif"]
  }
});
const SocialCard = () => {
  return (
    <div className="socialcard">
      <div className="socialcard-Logo-Container">
        <img src={dev} alt="DEV_COOL_LOGO" />
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
