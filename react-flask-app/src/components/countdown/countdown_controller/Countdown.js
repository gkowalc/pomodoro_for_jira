import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'

import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";

import PomodoroBreakView from './countdown_phases/PomodoroBreakView';
import PomodoroActiveSession from './countdown_phases/PomodoroActiveSession';
import PomodoroBreakInProgress from './countdown_phases/PomodoroBreakInProgress';
const CoutdownCompontent = (props) => {
 // read values  from Settings component cache
    const sessionDurationFromSettingsComponent = (localStorage.getItem('sessionDuration') || 25)
    const breakDurationDefaulttplusCached = (localStorage.getItem('breakduration') || 1)
    const longBreakDurationDefaultplusCached = (localStorage.getItem('longBreakDuration') || 20)
    const frequencyLongBreakDefaultplusCached = (localStorage.getItem('frequencyLongBreak') || 4)
    const hours = localStorage.getItem('hours') || 0;
    const minutes = (localStorage.getItem('minutes') || 0);
    const seconds = (localStorage.getItem('seconds') || 5); 



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
    const [duringPomodoroBreak, setDuringPomodoroBreak] = useState(false);
    const [breakTimerRunning, setBreakTimerRunning] = useState(false);
    
    const  [currentPomodoroState, setCurrentPomodoroState] = useState("StartNewPomodoroView");

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
    const startPomodoroBreak = () => {
      setBreakTimerRunning(!breakTimerRunning)
    }

    const changePomodoroStatus = () => {
      setStartPomodoro(!pomodoroRunning)
    }

    const setBreakStatus = () => {
      console.log("break status changed")
      setDuringPomodoroBreak(!duringPomodoroBreak)

    }
   
   
  
   
    //React.useEffect(() => {
    //  localStorage.setItem('hours', hours);
    //  localStorage.setItem('minutes', minutes);
    //  localStorage.setItem('seconds', seconds);
    //}, [hours, minutes, seconds]);
    
    
 const StartSession = () => {

  switch(currentPomodoroState == x) {
  case (x== "StartNewPomodoroView"):
    return (
      <ProjectIssueSelectorView></ProjectIssueSelectorView>
      )
      

  }
  if ( (duringPomodoroBreak == true) && (breakTimerRunning == true)) 

  { 
  const minutes =  breakDurationDefaulttplusCached
  const pomodoroTimerKiller = () => {
    setBreakStatus();
    startPomodoroBreak();  
    changePomodoroStatus();
  } 
  const propsdata = {hours, minutes, seconds, breakTimerRunning, pomodoroTimerKiller  }
  return(
    <PomodoroBreakInProgress timerdata={propsdata}></PomodoroBreakInProgress>)
  } 
  
  if ( (duringPomodoroBreak == true)) 
         
  { const  breakproplist = {startPomodoroBreak, setBreakStatus, changePomodoroStatus}
 
  return(
    <PomodoroBreakView breakprop={breakproplist}></PomodoroBreakView>)
  } 
  
  if ( (pomodoroRunning == true)) {
    const pomodoroTimerKiller = setBreakStatus
    const propsdata = {hours, minutes, seconds, changePomodoroStatus , pomodoroTimerKiller}
    
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
}, [props.SelectedOptionIssue, duringPomodoroBreak, breakTimerRunning]);
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

