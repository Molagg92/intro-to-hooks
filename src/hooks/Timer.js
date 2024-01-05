/* eslint-disable no-unused-vars */
import React from 'react';
import useTimer from './useTimer';  // Update the import path


function Timer() {
  // New line below!
  const [isActive, timer, setIsActive] = useTimer();

  return (
    <React.Fragment>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;