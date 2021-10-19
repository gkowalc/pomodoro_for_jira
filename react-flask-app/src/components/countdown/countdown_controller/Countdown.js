import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'
import PomodoRoTimer from '../pomodorotimer/pomodoroTimer';
import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';

import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import Modal from "react-modal";
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

    const [modalOpen, setModalOpen] = useState(false);

    const makeStartSession = () => {setPaused(!paused)
      localStorage.setItem('ispaused', !paused)
      
  ;
    }
    const closeModal = () => {setPaused(!paused)
      console.log("trying to go back from nodal")
      setModalOpen(!modalOpen)
      localStorage.setItem('ispaused', !paused)
      
  ;
    }
    const makeStop = () => {
   
      setModalOpen(!modalOpen)
       
  ;
    }
   
    function toggleModal() {
      console.log("trying to close nodal")
      setModalOpen(!modalOpen);
    }
    const propsdata = {hours, minutes, seconds, paused, sessionCompleted}
    //React.useEffect(() => {
    //  localStorage.setItem('hours', hours);
    //  localStorage.setItem('minutes', minutes);
    //  localStorage.setItem('seconds', seconds);
    //}, [hours, minutes, seconds]);
    
    
 const StartSession = () => {
  if ((props.SelectedOptionIssue != undefined) && (paused == true) && ([hours, minutes, seconds] == 0)) 
  {
    console.log("it is 0.0.0")
    return(<div>
      Time for a break!
    </div>)
  } 
  
  if ((props.SelectedOptionIssue != undefined) && (pomodoroRunning == true)) {

    setStartPomodoro(true)
    return (<div>
        <PomodoRoTimer propsdata={propsdata}></PomodoRoTimer>
      <button onClick={makeStop}>
          Stop current session
          </button>
          <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog2"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >  
      <button onClick={closeModal} >Are you sure? </button> <button onClick={makeStop} >go back to pomodoro</button>
     
      </Modal>
    </div>)
   } 
   if (props.SelectedOptionIssue != undefined) {
    setStartPomodoro(true)
    return (<div>
      <button onClick={makeStartSession}>
          Start Session
          </button>
    </div>)
   } 

   if (pomodoroRunning == false) {
     return (
    <ProjectIssueSelectorView></ProjectIssueSelectorView>
    )}
 }    
 React.useEffect(() => {
 console.log("hello")
}, [props.SelectedOptionIssue, paused]);
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

