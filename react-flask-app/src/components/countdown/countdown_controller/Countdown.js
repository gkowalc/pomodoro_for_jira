import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'
import StartSession from './StartSession';
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
 
    const [pomodoroRunning, setStartPomodoro] = useState(false);
    const [duringPomodoroBreak, setDuringPomodoroBreak] = useState(false);
    const [breakTimerRunning, setBreakTimerRunning] = useState(false);
  
    const  [currentPomodoroState, setCurrentPomodoroState] = useState("ProjectIssueSelectorView");

    const startPomodoroBreak = () => {
      setBreakTimerRunning(!breakTimerRunning)
    }

    const changePomodoroStatus = () => {
      setStartPomodoro(!pomodoroRunning)
    }
    
    const changePomodoroViewState = (nextTransition) => {
      setCurrentPomodoroState(nextTransition)
    }


    const setBreakStatus = () => {
      console.log("break status changed")
      setDuringPomodoroBreak(!duringPomodoroBreak)

    }
  
    
    
 

  

  return (
      <div>
      <StartSession changePomodoroStatus={changePomodoroStatus} currentPomodoroState={currentPomodoroState} changePomodoroViewState={changePomodoroViewState} SelectedOptionIssue={props.SelectedOptionIssue} ></StartSession>
    
             </div>
      

    );
  };
  

export default CoutdownCompontent;

