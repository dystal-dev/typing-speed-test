import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Personal best: <br />
      WPM WPM: <br />
      Accuracy: <br />
      Time: <br />
      Difficulty: Easy Medium Hard Mode: Timed (60s) Passage <br />
      Start Typing Test Or click the text and start typing <br />
      Test Complete! Solid run. Keep pushing to beat your high score. WPM:
      <br />
      Accuracy: <br />
      Characters: <br />
      Go Again <br />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {" "}
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/dystal-dev" target="_blank">
          {" "}
          Dystal
        </a>
        .
      </div>
    </>
  );
}

export default App;
