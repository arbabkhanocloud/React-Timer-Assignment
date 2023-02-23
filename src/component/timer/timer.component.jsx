import { useState, useEffect } from "react";
import "./timer.component.style.scss";
import Button from "../button/button.component";
import TimerDigits from "../timer-digits/timer-digits.component";

const Timer = () => {
  const [timerState, setTimerState] = useState(false);
  const [milliSeconds, setMilliSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (timerState) {
      interval = setInterval(() => {
        setMilliSeconds((milliSeconds) => milliSeconds + 100);
      }, 100);
    } else if (!timerState) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerState]);

  const onClickStart = () => {
    setTimerState(true);
  };
  const onClickStop = () => {
    setTimerState(false);
  };
  const onClickReset = () => {
    setMilliSeconds(0);
    onClickStop();
  };
  const updatedMilliSeconds = (milliSeconds / 10) % 100;
  const updatedSeconds = Math.floor((milliSeconds / 1000) % 60);
  const updatedMinutes = Math.floor((milliSeconds / 60000) % 60);
  const updatedSHours = Math.floor((milliSeconds / 3600000) % 60);
  
  return (
    <div className="timer-container">
      <div className="timer-digits-container">
        <TimerDigits isMilliSeconds={false} updatedTime={updatedSHours} />
        <TimerDigits isMilliSeconds={false} updatedTime={updatedMinutes} />
        <TimerDigits isMilliSeconds={false} updatedTime={updatedSeconds} />
        <TimerDigits isMilliSeconds={true} updatedTime={updatedMilliSeconds} />
      </div>
      <div className="button-container">
        <Button onClickFunction={onClickReset}>Reset Timer</Button>
        <Button onClickFunction={onClickStop}>Stop Timer</Button>
        <Button onClickFunction={onClickStart}>Start Timer</Button>
      </div>
    </div>
  );
};

export default Timer;
