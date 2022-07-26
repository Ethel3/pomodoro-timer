import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import {useContext} from "react";
import SettingsContext from "./SettingsContext";

const red = "#f54e4e";
const blue = "#0000ff";

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <CircularProgressbar
        value={70}
        text={`70%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "butt",
          textColor: "#fff",
          pathColor: blue,
          trailColor: "rgba(225, 225, 225, .2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{marginTop: "20px"}}>
         <SettingsButton onClick = {()=> settingsInfo.setShowSettings(true)} />

      </div>
    </div>
  );
}

export default Timer;
