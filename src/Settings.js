import ReactSlider from "react-slider";
import ".//Slider.css";
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton";



function Settings() {
    const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work: {settingsInfo.WorkMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbclassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.WorkMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break: {settingsInfo.BreakMinutes}:00</label>
      <ReactSlider
        className={"slider red"}
        thumbclassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:"center", marginTop: "20px"}}>

      <BackButton  onClick={() => settingsInfo.setShowSettings(false)}/>

      </div>

    </div>
  );
}

export default Settings;
