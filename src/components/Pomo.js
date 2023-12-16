import React, { useState } from 'react'
import Timer from './Timer';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
function Pomo() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes,setWorkMinutes] = useState(45)
  const [breakMinutes,setBreakMinutes] = useState(15);
  return (
    <div>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes: workMinutes,
        breakMinutes: breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings></Settings> : <Timer></Timer>}
      </SettingsContext.Provider>
    </div>
  )
}

export default Pomo;
