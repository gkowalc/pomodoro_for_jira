import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'
import PomodoRoTimer from './pomodorotimer/pomodoroTimer';
const CoutdownCompontent = (props) => {
 // read values  from Settings component cache
    const sessionDurationFromSettingsComponent = (localStorage.getItem('sessionDuration') || 25)
    const breakDurationDefaulttplusCached = (localStorage.getItem('breakduration') || 5)
    const longBreakDurationDefaultplusCached = (localStorage.getItem('longBreakDuration') || 20)
    const frequencyLongBreakDefaultplusCached = (localStorage.getItem('frequencyLongBreak') || 4)
    const hours = 0;
    const minutes = sessionDurationFromSettingsComponent;
    const seconds = (localStorage.getItem('seconds') || 0); 

    // updates pomodoro minutes value if changed by settings component
    React.useEffect(() => {
      const minutes = sessionDurationFromSettingsComponent;
    }, [sessionDurationFromSettingsComponent]);

    const cacheBooleanToString = () => {
      switch(localStorage.getItem('ispaused')){
        case "true":  return true
        case "false": return false
      }

    }

    const [paused, setPaused] = useState(cacheBooleanToString);
    const [sessionCompleted, setsSssionCompleted] = useState(false);



    // saves times data to cache
    React.useEffect(() => {
      localStorage.setItem('hours', hours);
      localStorage.setItem('minutes', minutes);
      localStorage.setItem('seconds', seconds);
    }, [hours, minutes, seconds]);
    
  
 
    // counts  number of completed sessions
    //useEffect(() => {
     // if (sessionCompleted) {
      //  setsSssionCompleted(numberofSessions + 1 )
      //}
    //}, [sessionCompleted]);

    const makePause = () => {setPaused(!paused)
      localStorage.setItem('ispaused', !paused)
      
  ;
    }
  const propsdata = {hours, minutes, seconds, paused, sessionCompleted}
  
  //const dataToParent = {
  //numberofSessionsCompelted: numberofSessions,
  //}   
  //var data = numberofSessions
  //props.blabla(dataToParent);

    return (
      <div>
      <PomodoRoTimer propsdata={propsdata}></PomodoRoTimer>
      <button onClick={makePause}>
          {paused ? 'Resume' : 'Pause'}
          </button>
       
      </div>
      

    );
  };
   // <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>


export default CoutdownCompontent;

