import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'

import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";
import PomodoroActiveSession from './countdown_phases/PomodoroActiveSession';
const CoutdownCompontent = (props) => {
 // read values  from Settings component cache
    const sessionDurationFromSettingsComponent = (localStorage.getItem('sessionDuration') || 25)
    const breakDurationDefaulttplusCached = (localStorage.getItem('breakduration') || 5)
    const longBreakDurationDefaultplusCached = (localStorage.getItem('longBreakDuration') || 20)
    const frequencyLongBreakDefaultplusCached = (localStorage.getItem('frequencyLongBreak') || 4)
    const hours = localStorage.getItem('hours') || 0;
    const minutes = (localStorage.getItem('minutes') ||sessionDurationFromSettingsComponent);
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
    const [paused, setPaused] = useState(true);
    const [pomodoroRunning, setStartPomodoro] = useState(false);
    const [sessionCompleted, setsSessionCompleted] = useState(false);



    // saves times data to cache
    // counts  number of completed sessions
    //useEffect(() => {
     // if (sessionCompleted) {
      //  setsSssionCompleted(numberofSessions + 1 )
      //}
    //}, [sessionCompleted]);


   // const makeStartSession = () => {setPaused(!paused)
    //  localStorage.setItem('ispaused', !paused)
      
 // ;
  //  }
    const changePomodoroStatus = () => {
      //setPaused(!paused)
      //localStorage.setItem('ispaused', !paused)
      setStartPomodoro(!pomodoroRunning)
    }
    const setBreakStatus = () => {
      //setPaused(!paused)
      //localStorage.setItem('ispaused', !paused)
      setsSessionCompleted(!sessionCompleted)
      //setPaused(!paused)
      //localStorage.setItem('ispaused', paused)
    }
   
   
  
   
    //React.useEffect(() => {
    //  localStorage.setItem('hours', hours);
    //  localStorage.setItem('minutes', minutes);
    //  localStorage.setItem('seconds', seconds);
    //}, [hours, minutes, seconds]);
    
    
 const StartSession = () => {

  if ( (sessionCompleted == true) && ([hours, minutes, seconds] == 0)) 
  {
    console.log("it is 0.0.0")
    return(<div>
      Time for a break!
    </div>)
  } 
  
  if ( (pomodoroRunning == true)) {
    const propsdata = {hours, minutes, seconds, changePomodoroStatus , setBreakStatus}
    return(<PomodoroActiveSession timerdata={propsdata}></PomodoroActiveSession>)
   } 
   if (props.SelectedOptionIssue != undefined) {
     return(
    <StartNewPomodoroView startPomodoro={changePomodoroStatus}></StartNewPomodoroView>
     )} 
   if (pomodoroRunning == false) {
     return (
    <ProjectIssueSelectorView></ProjectIssueSelectorView>
    )}
 }    
 React.useEffect(() => {
 console.log("hello")
}, [props.SelectedOptionIssue, sessionCompleted]);
 const SessionStatus = () => {

 }
  
  //const dataToParent = {
  //numberofSessionsCompelted: numberofSessions,
  //}   
  //var data = numberofSessions
  //props.blabla(dataToParent);

    return (
      <div>
    <StartSession></StartSession>
             </div>
      

    );
  };
   // <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>


export default CoutdownCompontent;

