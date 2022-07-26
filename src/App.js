import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import {useState} from "react";

function App() {

  const [showSettings, setShowSettings] = useState(true);
  return (
  <main>
    {showSettings ? <Settings /> : <Timer />}
  </main>
  );
}

export default App;
