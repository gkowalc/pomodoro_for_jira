import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'

import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";

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
        return(<div>state3</div>)
    }

    return <div>hello!</div>
   }    

   

   export default StartSession;