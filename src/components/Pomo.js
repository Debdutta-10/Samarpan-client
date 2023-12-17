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
          <h1 style={{ "marginBottom": "20px", "textDecoration": "underline" }}>What is Pomodoro?</h1>
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
      <div className="pomo-text2">
        <h1 style={{ "marginBottom": "20px", "textDecoration": "underline" }}>How Pomodoro can be used spiritually?</h1>
        <p>The Pomodoro timer, typically known for enhancing productivity, can also be harnessed for profound spiritual purposes. When applied to spiritual practices, the Pomodoro technique becomes a transformative tool for cultivating mindfulness and deepening one's connection to the inner self. By dedicating focused intervals to contemplative practices such as meditation, prayer, or self-reflection, individuals can create sacred moments of stillness and introspection. The structured time intervals align with the rhythm of the Pomodoro technique, allowing practitioners to immerse themselves in spiritual activities without the distraction of external influences. Using the Pomodoro technique for spiritual purposes involves integrating focused intervals of spiritual practice into your daily routine. Here's a step-by-step guide:</p>
        <ol>
          <li><strong>Choose Your Spiritual Practice: </strong> 
            Identify the spiritual activities you want to incorporate, such as meditation, prayer, mindfulness exercises, gratitude reflection, or reading sacred texts.</li>
          <li><strong>Set Intervals: </strong> 
            Determine the duration of your Pomodoro intervals for spiritual practice. Traditional Pomodoro intervals are often 25 minutes of focused work followed by a 5-minute break. Adjust the intervals to suit your spiritual activities.</li>
          <li><strong>Create a Sacred Space: </strong>
            Designate a quiet and comfortable space for your spiritual practice. This could be a corner of a room, a meditation cushion, or a space in nature that allows you to connect with your inner self.</li>
          <li><strong>Initiate the Pomodoro Timer: </strong>
            Start the Pomodoro timer for the chosen interval dedicated to your spiritual practice. </li>
          <li><strong>Engage Fully: </strong>
            During the focused interval, immerse yourself completely in your chosen spiritual practice. Whether it's meditation, prayer, or reflection, let go of distractions and be fully present in the moment.</li>
          <li><strong>Take a Break: </strong>
            When the timer signals the end of the interval, take a short break. Use this time to stretch, breathe, and shift your focus. This break is an opportunity to integrate the spiritual experience into your daily activities.</li>
          <li><strong>Repeat as Desired: </strong>
            Continue the cycle of focused intervals and breaks based on your preferences and schedule. You can adjust the duration of both work and break periods to align with your spiritual needs.</li>
          <li><strong>Reflect: </strong>
            At the end of your Pomodoro sessions, take a few moments to reflect on your spiritual experience. Consider keeping a journal to capture insights, gratitude, or any transformative moments.</li>
          <li><strong>Consistency is Key: </strong>
            Incorporate this spiritual Pomodoro practice regularly into your routine. Consistency will deepen the impact of your spiritual endeavors and contribute to a sense of balance and mindfulness throughout your day.
          </li>
          <li><strong>Adapt to Your Needs: </strong>
            Feel free to adapt the Pomodoro technique to suit your evolving spiritual journey. Experiment with different practices, durations, and intervals to find what resonates best with you.</li>
        </ol>
      </div>
    </>

  )
}

export default Pomo;
