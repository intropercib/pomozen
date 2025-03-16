import { useEffect, useRef, useState } from '@lynx-js/react';
import './App.css';

export function App() {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [activeMode, setActiveMode] = useState('pomodoro');
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const mins = String(Math.floor(pomodoroTime / 60)).padStart(2, '0');
  const secs = String(pomodoroTime % 60).padStart(2, '0');

  const modes = {
    pomodoro: {
      time: 25 * 60,
      name: 'Pomodoro',
    },
    shortBreak: {
      time: 5 * 60,
      name: 'Short Break',
    },
    longBreak: {
      time: 15 * 60,
      name: 'Long Break',
    },
  };

  useEffect(() => {
    setPomodoroTime(modes[activeMode].time);
    handleStop();
  }, [activeMode]);

  const handleReset = () => {
    setPomodoroTime(modes[activeMode].time);
    handleStop();
  };

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setPomodoroTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            handleReset();
            setIsRunning(false);
            return 0;
          }
        });
        setIsRunning(true);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const handleModeChange = (mode) => {
    if (mode !== activeMode) {
      setActiveMode(mode);
    }
  };

  const handleAction = () => {
    if (isRunning) {
      handleStop();
    } else {
      handleStart();
    }
  };

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className={`container container-${activeMode}`}>
          <view className="header">
            <image
              src="https://pomofocus.io/images/icon-white2.png"
              className="logo"
            />
            <text className="app-title">PomoZen</text>
          </view>
          <view className="content-box">
            <view className={`timer-box timer-box-${activeMode}`}>
              <view className="tabs">
                {Object.keys(modes).map((mode) => (
                  <view
                    key={mode}
                    className={`tab ${activeMode === mode ? `tab-active-${activeMode}` : ''}`}
                    bindtap={() => handleModeChange(mode)}
                  >
                    <text className="tab-text">{modes[mode].name}</text>
                  </view>
                ))}
              </view>
              <view className="timer-display">
                <text>
                  {mins}:{secs}
                </text>
              </view>
              <view>
                <view className="timer-action">
                  <view className="action-button" bindtap={handleAction}>
                    <text className={`action-button-text-${activeMode}`}>
                      {isRunning ? 'PAUSE' : 'START'}
                    </text>
                  </view>
                  <view className="reset-button" bindtap={handleReset}>
                    <text className="reset-button-text">RESET</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view className="footer">
          <text className="footer-text">
            Made with <text className="heart">❤</text> by{' '}
            <text className="author">Intropercib</text>
          </text>
        </view>
      </view>
    </view>
  );
}
