import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import currencySwap from "./Images/currencySwap.svg";
import dummy_dolar from "./CalculatorFetch";

const Calculator = () => {
  const dolarConst = dummy_dolar.USD.find(item => item.id === 1);

  const [endResult, setEndResult] = useState(dolarConst.high);
  const [swap, setSwap] = useState(false);
  const [currency01, setCurrency01] = useState(dolarConst.code);
  const [currency02, setCurrency02] = useState(dolarConst.codein);
  const ChangeValue = userInput => {
    //make it recognize invalid numbers
    /* if (!isNaN(userInput)) {
      setEndResult(0);
      console.log("Return");
      return;
    }*/
    swap == true
      ? setEndResult("R$" + parseInt(userInput.target.value) * dolarConst.high)
      : setEndResult("R$" + parseInt(userInput.target.value) * dolarConst.high);

    console.log(endResult);
  };
  const SwapItUp = () => {
    setSwap(!swap);
    console.log("current state is: " + swap);
    if (swap == true) {
      console.log("it is true");
      setCurrency01(dolarConst.codein);
      setCurrency02(dolarConst.code);
    } else {
      console.log("it is false");
      setCurrency02(dolarConst.codein);
      setCurrency01(dolarConst.code);
    }
  };

  return (
    <div className="calculator-box">
      <div className="upper-area">
        <div>
          {/*USER InPUT */}
          <input
            maxlength="7"
            className="input-user"
            type="text"
            onChange={ChangeValue}
            placeholder=" 1"
          />
        </div>
        <div className="currency-user">
          {/*USER currency */}
          {currency01}
        </div>
      </div>

      <div className="currencySwap-Container">
        <img
          className="currencySwap"
          src={currencySwap}
          alt="currencySwap"
          onClick={SwapItUp}
        />
      </div>

      <div className="lower-area">
        <div className="output-user">
          {/*USER output */}
          {endResult}
        </div>
        <div className="currency-target">
          {/*USER's desired currency */}
          {currency02}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
