import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import click1 from "./Audio/click1.wav";
import click2 from "./Audio/click2.wav";

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const bpm = 100;

  const audio = new Audio(click1);

  function tick() {
    audio.play();
  }

  const activatesound = () => {
    if (play == false) {
      clearInterval();
      return;
    }
    setPlay(!play);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
    setInterval(tick, { bpm });
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input
          type="range"
          min="40"
          max="240"
          id="bpmPlayer"
          onChange={e => {
            console.log(e.target.value);
            bpm = e.target.value;
            console.log("BPM IS: " + bpm);
          }}
        />
      </div>
      <button onClick={activatesound}>{play ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Metronome;
