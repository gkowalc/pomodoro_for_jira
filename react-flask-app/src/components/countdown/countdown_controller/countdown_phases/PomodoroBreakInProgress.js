import React from 'react';

import { useState, useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"

  const PomodoroBreakInProgress = (props) => {
    const stopCurrentSession = (nextStateName) => {
      props.changePomodoroViewState(props.nextStateName)
    }
    const pomodoroTimerKiller = (nextStateName)  => {
      props.changePomodoroViewState(props.nextStateName)
    }
    React.useEffect(() => {
      console.log("changing pomdooro break status")
     
     }, [props.timerdata.breakTimerRunning]);
  
      

    
    const propslist = {seconds: 0, hours: 0, minutes: props.timerdata}
    return (<div>
    <PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
    <button onClick={stopCurrentSession}>
        Stop current break</button></div>)
  }


export default PomodoroBreakInProgress;
