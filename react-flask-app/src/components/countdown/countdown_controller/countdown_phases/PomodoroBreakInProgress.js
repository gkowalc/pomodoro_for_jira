import React, { useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"
import CacheCleaner from '../../../../helperfunctions/CacheCleaner';
  const PomodoroBreakInProgress = (props) => {
    const stopCurrentSession = (nextStateName) => {
      props.changePomodoroViewState(props.nextStateName)
    }
    const pomodoroTimerKiller = (nextStateName)  => {
      props.changePomodoroViewState(props.nextStateName);
      CacheCleaner(["minutes", "seconds", "hours"])
    }
   
     if (props.numberofsessions % props.settings.frequencyLongBreakDefaultplusCached != 0){
       
      const propslist = {seconds: 0, hours: 0, minutes: props.settings.breakDurationDefaulttplusCached}
      
      return (<div>
        <PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
        <button onClick={stopCurrentSession}>
            Stop current short break</button></div>)

    }
    else {
      const propslist = {seconds: 0, hours: 0, minutes: props.settings.longBreakDurationDefaultplusCached}
      return (<div>
        <PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
        <button onClick={stopCurrentSession}>
            Stop current Long break</button></div>)

    }
  
  }


export default PomodoroBreakInProgress;
