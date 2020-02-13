import React, { Fragment } from "react";
import dummy_weather from "./weather";
import "./scss/main.scss";
import "./App.css";

function App() {
  console.log(dummy_weather.weater);
  //definindo o ID no final garante que mais  a baixo as informacoes sejam mostradas
  const weater_1 = dummy_weather.weater.find(item => item.id === 1);
  const weater_2 = dummy_weather.weater.find(item => item.id === 2);
  const weater_3 = dummy_weather.weater.find(item => item.id === 3);
  const weater_4 = dummy_weather.weater.find(item => item.id === 4);
  //variables for metronome
  let bpm = 100;
  let playing = false;

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
            <div className="weater-bar-box">
              {/*<div className="weather-id">{find.id}</div>*/}
              <div className="weather-date">{weater_1.date}</div>
              <div className="weather-img">{weater_1.img}</div>
              <div className="temp-align">
                <div>{weater_1.temperatura[0]}ºC </div>
                <div>{weater_1.temperatura[1]}ºC </div>
              </div>
            </div>
          </div>
        </div>
        {/*metronome*/}
        <div className="metronome">
          <div className="bpmSlider">
            <div>
              {bpm}
              BPM
              <imput type="range" min="60" max="240" value={bpm} />
            </div>
            <button>{playing ? "Stop" : "Start"}</button>
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
