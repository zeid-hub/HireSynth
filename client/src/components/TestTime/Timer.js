import React, { useState, useEffect } from 'react';
import "./Timer.css"

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeUp]);

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
      <>
        <span className="timer-item">
          <span className="timer-value">{String(hours).padStart(2, '0')}</span>
          <span className="timer-label">Hours</span>
        </span>
        <span className="timer-separator">:</span>
        <span className="timer-item">
          <span className="timer-value">{String(minutes).padStart(2, '0')}</span>
          <span className="timer-label">Minutes</span>
        </span>
        <span className="timer-separator">:</span>
        <span className="timer-item">
          <span className="timer-value">{String(seconds).padStart(2, '0')}</span>
          <span className="timer-label">Seconds</span>
        </span>
      </>
    );
  };

  return (
    <div className="timer">
      {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
