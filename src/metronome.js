import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import metronomeimg from "./Images/metronomeimg.svg";
import playbutton from "./Images/playbutton.svg";
import click1 from "./Audio/click1.wav";

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const [bpm, setBpm] = useState(100);
  const [timer, setTimer] = useState(undefined);

  const audio = new Audio(click1);

  function tick() {
    audio.play();
  }

  const activatesound = () => {
    //bug: começa a tocar apenas após clicar 2 vezes no botão Start, fazendo assim que fique desalinhado com o que diz o botão
    console.log("PLay is: " + play);

    setPlay(!play);

    if (play == true) {
      console.log("BPM ON CLICK IS: " + { bpm });
      timer = setInterval(tick, (60 * 1000) / { bpm });

      return console.log("activatesound Terminou!");
    } else {
      clearInterval(timer);

      return console.log("activatesound Terminou FALSE");
    }
  };

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>
          <div className="bpm_mark">{bpm} BPM</div>
          <img className="metronomesvgimg" src={metronomeimg} />
        </div>
        <div className="detailsOnTop">
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
          <div className="detail"></div>
        </div>
        <div className="input_container">
          <input
            className="bpm__Player"
            type="range"
            min="40"
            max="160"
            step="10"
            id="bpmPlayer"
            onChange={e => {
              //console.log(e.target.value);
              setBpm(e.target.value);
              console.log("BPM IS: " + bpm);
            }}
          />
        </div>
      </div>
      <img
        className="metronomePLayer"
        src={playbutton}
        onClick={activatesound}
      />
    </div>
  );
};

export default Metronome;
