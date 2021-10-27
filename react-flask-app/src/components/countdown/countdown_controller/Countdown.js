import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'
import StartSession from './StartSession';
import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";
import UpdateIssueTimelog from '../../../helperfunctions/UpdateIssueTimelog';
import PomodoroBreakView from './countdown_phases/PomodoroBreakView';
import PomodoroActiveSession from './countdown_phases/PomodoroActiveSession';
import PomodoroBreakInProgress from './countdown_phases/PomodoroBreakInProgress';
const CoutdownCompontent = (props) => {
 // read values  from Settings component cache
    const sessionDurationFromSettingsComponent = (localStorage.getItem('sessionDuration') || 2 )
    const breakDurationDefaulttplusCached = (localStorage.getItem('breakduration') || 1)
    const longBreakDurationDefaultplusCached = (localStorage.getItem('longBreakDuration') || 20)
    const frequencyLongBreakDefaultplusCached = (localStorage.getItem('frequencyLongBreak') || 3)
    const hours = localStorage.getItem('hours') || 0;
    // const minutes = (localStorage.getItem('minutes') || sessionDurationFromSettingsComponent);
    const minutes = (localStorage.getItem('minutes') || 0);
    
    const seconds = (localStorage.getItem('seconds') || 3); 


// updates pomodoro minutes value if changed by settings component
  //  React.useEffect(() => {
   //   const minutes = sessionDurationFromSettingsComponent;
  //  }, [sessionDurationFromSettingsComponent]);

    //const cacheBooleanToString = () => {
     // switch(localStorage.getItem('ispaused')){
     //   case "true":  return true
      //  case "false": return false
     // }

    //}
 
    const [numberofsessions, setnumberofsessions] = useState();
    const [numberofBreaks, setnumberofBreaks] = useState(0);
    const [numberOfLongBreaks, setnumberOfLongBreaks] = useState(0);

    const [pomodoroRunning, setStartPomodoro] = useState(false);
  
    const [breakTimerRunning, setBreakTimerRunning] = useState(false);
  
    const  [currentPomodoroState, setCurrentPomodoroState] = useState(localStorage.getItem("currentPomodoroState") ||"ProjectIssueSelectorView");

    useEffect(() => {
      localStorage.setItem('currentPomodoroState', currentPomodoroState)}, [currentPomodoroState]);

    const startPomodoroBreak = () => {
      setBreakTimerRunning(!breakTimerRunning)
    }
    const setnumberofCompeltedBreaks = () => {
      setnumberofBreaks(numberofBreaks +1)
    }

    const incremenetPomodoroSession = () => {
      setBreakTimerRunning(!breakTimerRunning)
    }

    const changePomodoroStatus = () => {
      setStartPomodoro(!pomodoroRunning)
    }
    
    const changePomodoroViewState = (nextTransition) => {
      setCurrentPomodoroState(nextTransition)
    }
  
 const timerdata = {hours, minutes, seconds}
 const settings = {sessionDurationFromSettingsComponent, breakDurationDefaulttplusCached, longBreakDurationDefaultplusCached, frequencyLongBreakDefaultplusCached}
 
 return (
      <div> 
      <StartSession 
      numberofsessions={props.numberofSessions}
      setnumberofsessions={props.setNumberOfSessions}
      
      settings={settings}
       breakduration={breakDurationDefaulttplusCached}
       props={timerdata}
       changePomodoroStatus={changePomodoroStatus}
      currentPomodoroState={currentPomodoroState}
      changePomodoroViewState={changePomodoroViewState} 
      SelectedOptionIssue={props.SelectedOptionIssue} 
      
      ></StartSession>
      <UpdateIssueTimelog SessionDuration = {sessionDurationFromSettingsComponent } SelectedOptionIssue={props.SelectedOptionIssue}   numberofSessions={props.numberofSessions} />
             </div>

    );
  };
  

export default CoutdownCompontent;

