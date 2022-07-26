import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import {useState} from "react";
import SettingsContext from './SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [WorkMinutes, setWorkMinutes] = useState(45);
  const [BreakMinutes, setBreakMinutes] = useState(15);
  return (
  <main>
    <SettingsContext.Provider value={{
      showSettings,
      setShowSettings,
      WorkMinutes,
      BreakMinutes,
      setWorkMinutes,
      setBreakMinutes,
    }}>
    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
  </main>
  );
}

export default App;
