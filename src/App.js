import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import {useState} from "react";
import SettingsContext from './SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(true);
  return (
  <main>
    <SettingsContext.Provider value={{
      WorkMinutes: 45,
      BreakMinutes: 15,
    }}>
    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
  </main>
  );
}

export default App;
