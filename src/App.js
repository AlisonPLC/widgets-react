import React, { Fragment } from "react";
import dummy_weather from "./weather";
import "./App.css";

function App() {
  console.log(dummy_weather.weater);
  //definindo o ID no final garante que mais  a baixo as informacoes sejam mostradas
  const find = dummy_weather.weater.find(item => item.id === 1);

  return (
    <Fragment>
      <div className="App">
        <div className="AppBar">
          <img src={null} className="App-logo" alt="logo" />
          <h4 className="bar-name">super-app</h4>
        </div>
        <div className="weather-app">
          <div className="weather-bar">
            <h5>Weater</h5>
            {/* find definido antes do código */}
            <div className="weather-id">{find.id}</div>
            <div className="weather-date">{find.date}</div>
            <div className="weather-img">{find.img}</div>
            <div className="weather-temperatura">{find.temperatura}</div>
          </div>
        </div>

        {/* {dummy_weather.weater.map(item => (
        <div className='weather-bar'>{item.date}</div>
        ))} */}
      </div>
    </Fragment>
  );
}

export default App;
