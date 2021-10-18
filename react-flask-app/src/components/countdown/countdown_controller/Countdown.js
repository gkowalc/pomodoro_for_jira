import React from 'react';
import { useState, useEffect } from 'react';
import './countdown.css'
import PomodoRoTimer from '../pomodorotimer/pomodoroTimer';
import Project from '../../Project/Project';
import SelectedIssue from '../../Issue/SelectedIssue';

import Modal from "react-modal";
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

    const [paused, setPaused] = useState(true);
    const [startSession, setStartSession] = useState(false);
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

    const makeStartSession = () => {setPaused(!paused)
      localStorage.setItem('ispaused', !paused)
      
  ;
    }
    const makeStop2 = () => {setPaused(!paused)
      setIsOpen(!isOpen)
      localStorage.setItem('ispaused', !paused)
      
  ;
    }
    const makeStop = () => {
      setIsOpen(!isOpen)
       
  ;
    }
   
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
 
    
 const StartSession = () => {
  if ((props.SelectedOptionIssue != undefined) && (paused == false)) {
    setStartSession(true)
    return (<div>
        <PomodoRoTimer propsdata={propsdata}></PomodoRoTimer>
      <button onClick={makeStop}>
          Stop current session
          </button>
          <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      > Hello</Modal>
    </div>)
   } 
   if (props.SelectedOptionIssue != undefined) {
    setStartSession(true)
    return (<div>
      <button onClick={makeStartSession}>
          Start Session
          </button>
    </div>)
   } 

   if (startSession == false) {
    return (<div>
      Select Project/issue to start the pomodoro session!
    </div>)
   }
 }    
 React.useEffect(() => {
 console.log("hello")
}, [props.SelectedOptionIssue, paused]);
 const SessionStatus = () => {

 }
  const propsdata = {hours, minutes, seconds, paused, sessionCompleted}
  
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

