import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import dev from "./Images/dev.svg";
import WebFont from "webfontloader";
import UserIcon from "./Images/UserIcon.png";



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
      <h2 className="socialcard-Main-Topic">Learning React? Start Small.</h2>
      <div className="socialcard-Person">
        
          <h3 className="person-Name">Dave Ceddia</h3>
        <div className="person-Icon-Container">

        <img classname="person-Icon" src={UserIcon} alt="Dave Ceddia" />
    
        </div>
        
      </div>
      <a className="socialcard-Link"  href="#">@dcedia</a>
    </div>
  );
};
/* */
export default SocialCard;
