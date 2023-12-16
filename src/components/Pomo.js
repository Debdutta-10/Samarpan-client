import React, { useState } from 'react'
import Timer from './Timer';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import './styles/pomo.css'
function Pomo() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5);
  return (
    <>
      <div className="pomo-container">
        <div className="pomo-text">
          <h1 style={{"marginBottom":"20px","textDecoration":"underline"}}>What is Pomodoro?</h1>
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It's a popular approach to enhance productivity and manage time effectively. The technique uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Here's how the Pomodoro Technique typically works:
          <ol>
            <li>Choose a Task: Select a task you want to work on.</li>
            <li>Set the Timer: Set a timer for a fixed period, usually 25 minutes, which is called one "Pomodoro."</li>
            <li>Work on the Task: Focus on the chosen task until the timer rings.</li>
            <li>Take a Short Break: Take a short break, typically around 5 minutes.</li>
            <li>Repeat: Repeat the process. After completing four Pomodoros, take a longer break, around 15–30 minutes.</li>
          </ol>
        </div>
        <div className='timer-settings-container'>
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
      </div>
    </>

  )
}

export default Pomo;
