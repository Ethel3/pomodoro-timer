import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

const red = "#f54e4e";
const blue = "#0000ff";

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("Work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  // const nextMode = "Work";
  // const nextSeconds = settingsInfo.WorkMinutes;
  
  
    function switchMode() {
      const nextMode = modeRef.current === "Work" ? "Break" : "Work";
      const nextSeconds =
        nextMode === "Work"
          ? settingsInfo.WorkMinutes
          : settingsInfo.BreakMinutes * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current=nextSeconds;
    }
    function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }
  
  function initTimer()
  {
    setSecondsLeft(settingsInfo.WorkMinutes * 60);
  }
  useEffect(() => {
    initTimer()

    const interval = setInterval(() => {
      console.log("int");
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 100);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "Work"
      ? settingsInfo.WorkMinutes * 60
      : settingsInfo.BreakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "Work" ? blue : red,
          tailColor: "rgba(225, 225, 225, .2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
