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
                type="number"
                value={minVal}
                onChange={(event) => setMinVal(+event.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <p>Max number:</p>
              <input
                type="number"
                value={maxVal}
                onChange={(event) => setMaxVal(+event.target.value)}
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
