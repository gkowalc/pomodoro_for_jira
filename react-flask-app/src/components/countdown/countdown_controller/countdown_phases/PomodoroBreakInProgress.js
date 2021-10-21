import React from 'react';

import { useState, useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"

  const PomodoroBreakInProgress = (props) => {
   
  
    React.useEffect(() => {
      console.log("changing pomdooro break status")
     
     }, [props.timerdata.breakTimerRunning]);
  
      

    

    return (<div>
    <PomodoRoTimer propsdata={props.timerdata} ></PomodoRoTimer>
    <button>
        Stop current break</button></div>)
  }


export default PomodoroBreakInProgress;
