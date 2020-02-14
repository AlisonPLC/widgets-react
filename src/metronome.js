import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import click1 from "./Audio/click1.wav";

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const [bpm, setBpm] = useState(100);
  let timer = null;

  const audio = new Audio(click1);

  function tick() {
    audio.play();
  }

  const activatesound = () => {
    //bug: começa a tocar apenas após cliscar 2 vezes no botão Start, fazendo assim que fique desalinhado com o que diz o botão
    console.log("PLay is: " + play);

    setPlay(!play);

    if (play == true) {
      console.log("BPM ON CLICK IS: " + { bpm });
      timer = setInterval(tick, (60 / { bpm }) * 1000);

      return console.log("activatesound Terminou!");
    } else {
      clearInterval(timer);

      return console.log("activatesound Terminou FALSE");
    }
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
            //console.log(e.target.value);
            setBpm(e.target.value);
            console.log("BPM IS: " + bpm);
          }}
        />
      </div>
      <button onClick={activatesound}>{play ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Metronome;
