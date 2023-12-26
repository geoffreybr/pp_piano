import c from "./piano/C4.mp3";
import db from "./piano/Db4.mp3";
import d from "./piano/D4.mp3";
import eb from "./piano/Eb4.mp3";
import e from "./piano/E4.mp3";
import f from "./piano/F4.mp3";
import gb from "./piano/Gb4.mp3";
import g from "./piano/G4.mp3";
import ab from "./piano/Ab4.mp3";
import a from "./piano/A4.mp3";
import bb from "./piano/Bb4.mp3";
import b from "./piano/B4.mp3";
import c2 from "./piano/C5.mp3";
import db2 from "./piano/Db5.mp3";
import d2 from "./piano/D5.mp3";
import eb2 from "./piano/Eb5.mp3";
import e2 from "./piano/E5.mp3";
import "./index.css";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import elise from "./elise.jpg"



function Sheet() {
  return (
    <img type="button" src={elise} className="note-image" width="900px" height="250px"></img>
  )
}

function App() {

  const [state, setState] = useState(false)
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });


const styles = {
  color: "red"
};

  const [playC] = useSound(c);
  const [playDb] = useSound(db);
  const [playD] = useSound(d);
  const [playEb] = useSound(eb);
  const [playE] = useSound(e);
  const [playF] = useSound(f);
  const [playGb] = useSound(gb);
  const [playG] = useSound(g);
  const [playAb] = useSound(ab);
  const [playA] = useSound(a);
  const [playBb] = useSound(bb);
  const [playB] = useSound(b);
  const [playC2] = useSound(c2);
  const [playDb2] = useSound(db2);
  const [playD2] = useSound(d2);
  const [playEb2] = useSound(eb2);
  const [playE2] = useSound(e2);

  function handleKeyPress(event) {
    switch (event.key) {
      case "a":
        playC();
        break;
      case "w":
        playDb();
        break;
      case "s":
        playD();
        break;
      case "e":
        playEb();
        break;
      case "d":
        playE();
        break;
      case "f":
        playF();
        break;
      case "u":
        playGb();
        break;
      case "j":
        playG();
        break;
      case "i":
        playAb();
        break;
      case "k":
        playA();
        break;
      case "o":
        playBb();
        break;
      case "l":
        playB();
        break;
      case "c":
        playC2();
        break;
      case "v":
        playDb2();
        break;
      case "b":
        playD2();
        break;
      case "n":
        playEb2();
        break;
      case "m":
        playE2();
        break;
    }
  }



  return (
    <div className="container">
      {state ? <Sheet /> : null}
      
      <div id="piano">
        <div className="wanna-play">
          <p>You wanna try to play something?</p>
          <button onClick={() => setState(!state)}>Click here!</button>
        </div>
        
        <div className="shortcut-black sb1">w</div>
        <div className="shortcut-black sb2">e</div>
        <div className="shortcut-black sb3">u</div>
        <div className="shortcut-black sb4">i</div>
        <div className="shortcut-black sb5">o</div>
        <div className="shortcut-black sb6">v</div>
        <div className="shortcut-black sb7">n</div>

        <div className="keys">
          <div className="key"></div>
          <div className="black-key bk1"></div>
          <div className="key"></div>
          <div className="black-key bk2"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="black-key bk3"></div>
          <div className="key"></div>
          <div className="black-key bk4"></div>
          <div className="key"></div>
          <div className="black-key bk5"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="black-key bk6"></div>
          <div className="key"></div>
          <div className="black-key bk7"></div>
          <div className="key"></div>
        </div>
        <div className="shortcut-white sw1">a</div>
        <div className="shortcut-white sw2">s</div>
        <div className="shortcut-white sw3">d</div>
        <div className="shortcut-white sw4">f</div>
        <div className="shortcut-white sw5">j</div>
        <div className="shortcut-white sw6">k</div>
        <div className="shortcut-white sw7">l</div>
        <div className="shortcut-white sw8">c</div>
        <div className="shortcut-white sw9">b</div>
        <div className="shortcut-white sw10">m</div>
      </div>
    </div>
  );
}


export default App;
