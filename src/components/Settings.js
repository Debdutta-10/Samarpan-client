import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import './styles/settings.css'
import SettingsContext from './SettingsContext'

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <>
            <div className="settings-container">
                <label>Work minutes: {settingsInfo.workMinutes}:00</label>
                <ReactSlider
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    min={1}
                    max={120}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                ></ReactSlider>
                <label>Break minutes: {settingsInfo.breakMinutes}:00</label>
                <ReactSlider
                    className={'slider-green'}
                    thumbClassName={'thumb-green'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={120}
                ></ReactSlider>
            </div>
            <button className='settings-button' onClick={()=>settingsInfo.setShowSettings(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
                Back
            </button>
        </>
    )
}

export default Settings
