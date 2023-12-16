import React, { useState, useContext, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/timer.css';
import SettingsContext from './SettingsContext';

function Timer() {
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [mode, setMode] = useState('break');

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function initTimer() {
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
        setIsPaused(false);
        isPausedRef.current = false;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);

        if (secondsLeftRef.current === 0) {
            switchMode();
        }
    }

    const togglePause = () => {
        setIsPaused((prevIsPaused) => {
            if (!prevIsPaused && secondsLeftRef.current === 0) {
                switchMode();
            }

            isPausedRef.current = !prevIsPaused;
            return !prevIsPaused;
        });
    };

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                switchMode();
            } else {
                tick();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round((secondsLeft / totalSeconds) * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <>
            <div className="progress-bar">
                <CircularProgressbar
                    value={minutes}
                    text={`${minutes}:${seconds}`}
                    styles={buildStyles({
                        textColor: 'rgb(0,0,0)',
                        pathColor: mode === 'work' ? '#fd5c63' : '#17B169',
                    })}
                />
            </div>
            <div className="timer-button-container">
                <button className="timer-button" onClick={togglePause}>
                    {isPaused ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>


            <button className="settings-button" onClick={() => settingsInfo.setShowSettings(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
                Settings
            </button>
        </>
    );
}

export default Timer;
