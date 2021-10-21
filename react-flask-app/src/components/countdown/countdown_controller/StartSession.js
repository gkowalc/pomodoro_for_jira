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
        return (<div>
            <ProjectIssueSelectorView props={props}></ProjectIssueSelectorView>
        </div>)
        
    case 'StartNewPomodoroView':
      return( null
       // <StartNewPomodoroView startPomodoro={changePomodoroStatus}></StartNewPomodoroView>
         )
  
    }

    return <div>hello!</div>
   }    

   

   export default StartSession;