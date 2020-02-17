import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import currencySwap from "./Images/currencySwap.svg";
import dummy_dolar from "./CalculatorFetch";

const Calculator = () => {
  const dolarConst = dummy_dolar.USD.find(item => item.id === 1);

  const [endResult, setEndResult] = useState(undefined);
  const ChangeValue = userInput => {
    setEndResult(parseInt(userInput.target.value) * dolarConst.high);
    console.log(endResult);
  };

  return (
    <div className="calculator-box">
      <div className="upper-area">
        <div>
          {/*USER InPUT */}
          <input className="input-user" type="text" onChange={ChangeValue} />
        </div>
        <div className="currency-user">
          {/*USER currency */}
          {dolarConst.code}
        </div>
      </div>

      <div className="currencySwap-Container">
        <img className="currencySwap" src={currencySwap} alt="currencySwap" />
      </div>

      <div className="lower-area">
        <div className="output-user">
          {/*USER output */}
          {endResult}
        </div>
        <div className="currency-target">
          {/*USER's desired currency */}
          {dolarConst.codein}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
