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
import elise from "./elise.png"
import godfather from "./godfather.png"
import clocks from "./clocks.png"



function Sheet({ sheet }) {
  

  return (
    <img src={sheet} className="note-image" width="1000px" height="250px"></img>
  )
}

const NextButton = () => {
  return <button>Next Song!</button>
}


function App() {

  const [state, setState] = useState(false)
  const [nextSong, setNextSong] = useState(0)

  const sheetArray = [elise, godfather, clocks]
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const changeColorWhite = (wk) => {
    wk.style.backgroundColor = "#7e2811";
    setTimeout(() => {
      wk.style.backgroundColor = "#ffffff";
    }, 150)
  }
  const changeColorBlack = (wk) => {
    wk.style.backgroundColor = "#7e2811";
    setTimeout(() => {
      wk.style.backgroundColor = "#1d1e22";
    }, 150)
  }



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
        const wk1 = document.querySelector(".wk1");
        changeColorWhite(wk1)
        
        break;
      case "w":
        playDb();
        const bk1 = document.querySelector(".bk1");
        changeColorBlack(bk1)
        break;
      case "s":
        playD();
        const wk2 = document.querySelector(".wk2");
        changeColorWhite(wk2)
        
        break;
      case "e":
        playEb();
        const bk2 = document.querySelector(".bk2");
        changeColorBlack(bk2)
        break;
      case "d":
        playE();
        const wk3 = document.querySelector(".wk3");
        changeColorWhite(wk3)
        break;
      case "f":
        playF();
        const wk4 = document.querySelector(".wk4");
        changeColorWhite(wk4)
        break;
      case "r":
        playGb();
        const bk3 = document.querySelector(".bk3");
        changeColorBlack(bk3)
        break;
      case "g":
        playG();
        const wk5 = document.querySelector(".wk5");
        changeColorWhite(wk5)
        break;
      case "t":
        playAb();
        const bk4 = document.querySelector(".bk4");
        changeColorBlack(bk4)
        break;
      case "h":
        playA();
        const wk6 = document.querySelector(".wk6");
        changeColorWhite(wk6)
        break;
      case "u":
        playBb();
        const bk5 = document.querySelector(".bk5");
        changeColorBlack(bk5)
        break;
      case "j":
        playB();
        const wk7 = document.querySelector(".wk7");
        changeColorWhite(wk7)
        break;
      case "k":
        playC2();
        const wk8 = document.querySelector(".wk8");
        changeColorWhite(wk8)
        break;
      case "i":
        playDb2();
        const bk6 = document.querySelector(".bk6");
        changeColorBlack(bk6)
        break;
      case "l":
        playD2();
        const wk9 = document.querySelector(".wk9");
        changeColorWhite(wk9)
        break;
      case "o":
        playEb2();
        const bk7 = document.querySelector(".bk7");
        changeColorBlack(bk7)
        break;
      case ";":
        playE2();
        const wk10 = document.querySelector(".wk10");
        changeColorWhite(wk10)
        break;
    }
  }



  return (
    <div className="container">
      {state ? <Sheet sheet={sheetArray[nextSong]} /> : null}
      {state ? <button onClick={() => {
        if (nextSong > 1) {
          alert("That's it, no more songs");
          setTimeout(() => {
            setNextSong(0)
          }, 1000)
          
          
        } else {
          setNextSong(nextSong + 1)
        }
      }}>Next Song</button> : null}
      
      <div id="piano">
        <div className="wanna-play">
          <p>You wanna try to play something?</p>
          <button onClick={() => setState(!state)}>Click here!</button>
        </div>
        
        <div className="shortcut-black sb1">w</div>
        <div className="shortcut-black sb2">e</div>
        <div className="shortcut-black sb3">r</div>
        <div className="shortcut-black sb4">t</div>
        <div className="shortcut-black sb5">u</div>
        <div className="shortcut-black sb6">i</div>
        <div className="shortcut-black sb7">o</div>

        <div className="keys">
          <div className="key wk1"></div>
          <div className="black-key bk1"></div>
          <div className="key wk2"></div>
          <div className="black-key bk2"></div>
          <div className="key wk3"></div>
          <div className="key wk4"></div>
          <div className="black-key bk3"></div>
          <div className="key wk5"></div>
          <div className="black-key bk4"></div>
          <div className="key wk6"></div>
          <div className="black-key bk5"></div>
          <div className="key wk7"></div>
          <div className="key wk8"></div>
          <div className="black-key bk6"></div>
          <div className="key wk9"></div>
          <div className="black-key bk7"></div>
          <div className="key wk10"></div>
        </div>
        <div className="shortcut-white sw1">a</div>
        <div className="shortcut-white sw2">s</div>
        <div className="shortcut-white sw3">d</div>
        <div className="shortcut-white sw4">f</div>
        <div className="shortcut-white sw5">g</div>
        <div className="shortcut-white sw6">h</div>
        <div className="shortcut-white sw7">j</div>
        <div className="shortcut-white sw8">k</div>
        <div className="shortcut-white sw9">l</div>
        <div className="shortcut-white sw10">;</div>
      </div>
    </div>
  );
}


export default App;
