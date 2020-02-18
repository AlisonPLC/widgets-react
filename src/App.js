import React, { Fragment } from "react";
import dummy_weather from "./weather";
import "./scss/main.scss";
import Metronome from "./metronome";
import SocialCard from "./socialCard";
import Calculator from "./Calculator";

import WebFont from "webfontloader";

import "./App.css";

function App() {
  console.log(dummy_weather.weater);
  //definindo o ID no final garante que mais  a baixo as informacoes sejam mostradas
  const weater_1 = dummy_weather.weater.find(item => item.id === 1);
  const weater_2 = dummy_weather.weater.find(item => item.id === 2);
  const weater_3 = dummy_weather.weater.find(item => item.id === 3);
  const weater_4 = dummy_weather.weater.find(item => item.id === 4);
  const weater_5 = dummy_weather.weater.find(item => item.id === 5);
  const weater_6 = dummy_weather.weater.find(item => item.id === 6);
  const weater_7 = dummy_weather.weater.find(item => item.id === 7);

  return (
    <Fragment>
      {/*lovely metronome parts */}

      <div className="App">
        <div className="AppBar">
          <img src={null} className="App-logo" alt="logo" />
          <h4 className="bar-name">super-app</h4>
        </div>

        <div className="weather-app">
          <div className="weather-bar">
            {/* find definido antes do código */}

            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_1.date}</div>
              <img
                className="weather-img"
                src={weater_1.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_1.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_2.date}</div>
              <img
                className="weather-img"
                src={weater_2.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_2.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_3.date}</div>
              <img
                className="weather-img"
                src={weater_3.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_3.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_4.date}</div>
              <img
                className="weather-img"
                src={weater_4.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_4.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_5.date}</div>
              <img
                className="weather-img"
                src={weater_5.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_5.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_6.date}</div>
              <img
                className="weather-img"
                src={weater_6.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_6.temperatura}°C </div>
              </div>
            </div>
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_7.date}</div>
              <img
                className="weather-img"
                src={weater_7.img}
                alt="weater Image"
              />
              <div className="temp-align">
                <div>{weater_7.temperatura}°C </div>
              </div>
            </div>
          </div>
        </div>
        {/* {dummy_weather.weater.map(item => (
        <div className='weather-bar'>{item.date}</div>
        ))} */}
        {/*metronome*/}
        <Metronome />
        {/*social card */}

        <SocialCard />
        {/*Currency calculator*/}
        <Calculator />
      </div>
    </Fragment>
  );
}

export default App;
