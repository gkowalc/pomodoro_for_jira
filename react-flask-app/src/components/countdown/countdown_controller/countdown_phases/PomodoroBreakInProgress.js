import React from 'react';

import { useState, useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"

  const PomodoroBreakInProgress = (props) => {
   
    const makeStop = () => {
      

    }

    return (<div>
    <PomodoRoTimer propsdata={props.timerdata}></PomodoRoTimer>
    <button onClick={makeStop}>
        Stop current break</button></div>)
  }


export default PomodoroBreakInProgress;
