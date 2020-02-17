import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import currencySwap from "./Images/currencySwap.svg";

const Calculator = () => {
  return (
    <div className="calculator-box">
      <div className="upper-area">
        <div className="input-user">{/*USER InPUT */}1</div>
        <div className="currency-user">
          {/*USER currency */}
          dollar
        </div>
      </div>

      <div className="currencySwap-Container">
        <img className="currencySwap" src={currencySwap} alt="currencySwap" />
      </div>

      <div className="lower-area">
        <div className="output-user">
          {/*USER output */}
          <h5>4.31</h5>
        </div>
        <div className="currency-target">
          {/*USER's desired currency */}
          reais
        </div>
      </div>
    </div>
  );
};
export default Calculator;
