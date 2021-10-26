import React, { useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"
import CacheCleaner from '../../../../helperfunctions/CacheCleaner';
import cloneDeep from 'lodash/cloneDeep';

import finishedSessionSound from '../../../../sounds/sound.wav'
import ReactAudioPlayer from 'react-audio-player';
  const PomodoroBreakInProgress = (props) => {
    const stopCurrentSession = (nextStateName) => {
      props.changePomodoroViewState(props.nextStateName)
    }
    const pomodoroTimerKiller = (nextStateName)  => {
      props.changePomodoroViewState(props.nextStateName);
      CacheCleaner(["minutes", "seconds", "hours"])
    }
   
     if (props.numberofsessions % props.settings.frequencyLongBreakDefaultplusCached != 0){
       var propslist = {}
       if (localStorage.getItem('minutes')) {
        var propslist = {seconds: localStorage.getItem('seconds'), hours: localStorage.getItem('hours'), minutes: localStorage.getItem('minutes')}
       }
       else {
        var propslist = {seconds: 0, hours: 0, minutes: props.settings.breakDurationDefaulttplusCached
        }
      }
        return (<div>
          <PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
          <button onClick={stopCurrentSession}>
              Stop current short break</button>
             </div>)
              
      //return (<div>
        //<PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
        //<button onClick={stopCurrentSession}>
         //   Stop current short break</button></div>)

     }

    else {
      var propslist = {}
      if (localStorage.getItem('minutes')) {
       var propslist = {seconds: localStorage.getItem('seconds'), hours: localStorage.getItem('hours'), minutes: localStorage.getItem('minutes')}
      }
      else {
       var propslist = {seconds: 0, hours: 0, minutes: props.settings.longBreakDurationDefaultplusCached
       }
      }
      return (<div>
        <PomodoRoTimer props={propslist}  pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
        <button onClick={stopCurrentSession}>
            Stop current Long break</button></div>)

     }
}


export default PomodoroBreakInProgress;
