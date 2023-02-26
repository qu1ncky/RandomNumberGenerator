import React from "react";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * maxVal) + minVal);
  };

  const handler = (event, callback) => {
    if (!isNaN(Number(event.target.value))) {
      callback(Number(event.target.value));
    }
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.randomNumber}>
            <p>{randomNum}</p>
          </div>
          <div className={styles.rangeContainer}>
            <div className={styles.inputContainer}>
              <p>Min number:</p>
              <input
                value={minVal}
                onChange={(event) => handler(event, setMinVal)}
              />
            </div>
            <div className={styles.inputContainer}>
              <p>Max number:</p>
              <input
                value={maxVal}
                onChange={(event) => handler(event, setMaxVal)}
              />
            </div>
          </div>
          <a
            onClick={handleRandomNum}
            href="/#"
            className={styles.generateButton}
          >
            Generate
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
