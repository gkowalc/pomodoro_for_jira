import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'

import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";
import PomodoroActiveSession from './countdown_phases/PomodoroActiveSession';
const StartSession = (props) => {

    switch(props.currentPomodoroState) {

        case 'ProjectIssueSelectorView':
            const nextStateName = 'StartNewPomodoroView' 
        return (<div>
            <ProjectIssueSelectorView props={props} nextStateName={nextStateName}></ProjectIssueSelectorView>
        </div>)
        
    case 'StartNewPomodoroView':
    const nextStateName2='PomodoroActiveSession'
    return( 
        
       <StartNewPomodoroView nextStateName={nextStateName2} props={props}></StartNewPomodoroView>
         )
  
    case 'PomodoroActiveSession':
        const nextStateName3='PomodoroBreakView'
        const pomodoroTimerKiller = ()  => {

        }
          return(<PomodoroActiveSession 
            timerdata={props.props}
            props={props}
            changePomodoroViewState={props.changePomodoroViewState}
            nextStateName={nextStateName3}
            
          ></PomodoroActiveSession>)
    }

    return <div>hello!</div>
   }    

   

   export default StartSession;