import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";

const red = "#f54e4e";
const blue = "#0000ff";

function Timer() {
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
         <SettingsButton />

      </div>
    </div>
  );
}

export default Timer;
