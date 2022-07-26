import ReactSlider from "react-slider";
import ".//Slider.css";
function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Minute:</label>
      <ReactSlider
        className={"slider"}
        thumbclassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
      <label>Break Minute:</label>
      <ReactSlider
        className={"slider red"}
        thumbclassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;
