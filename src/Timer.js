import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
          strokeLinecap: 'butt',
          textColor: "#fff",
          pathColor: blue,
          trailColor: "rgba(225, 225, 225, .2)",
        })}
      />
      <div></div>
    </div>
  );
}

export default Timer;
