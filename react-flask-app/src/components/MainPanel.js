import React from 'react';
import { useState, useEffect } from 'react';
import './MainPanel.css' 
import CoutdownCompontent from './countdown/Countdown';
import TopMenu from './HeaderMenu/TopMenu';
import Project from './Project/Project';
import SelectedIssue from './Issue/SelectedIssue'; 

import CompletedSessionCounter from './countdown/CompletedSessionsCounter/CompletedSessionCounter';
const MainPanel = () => {
const [numberofSessions, setNumberOfSessions] = useState(0)
const [selectedProject, setSelectedProject] = useState()
const [SelectedOptionIssue, setSelectedIssue] = useState();
const [SessionDuration, setSessioNDuration] = useState(25);

// props for setting component
// const [ sessionDuration, setSessionDuration ] = useState(25);
//const [ breakDuration, setbreakDuration ] = useState(5);
//const [ longBreakDuration, setLongBreakDuration ] = useState(25);
//const [frequencyLongBreak, setfrequencyLongBreak ] = useState(4);

useEffect(() => {
   UpdateTicket()
  }, [numberofSessions]);

  useEffect(() => {

   }, [selectedProject]);

  async function UpdateTicket() {
    const completedSessionData = {
      "issuekey": SelectedOptionIssue, 
      "minutes": SessionDuration
      }
      console.log(completedSessionData)
    const response = await fetch('/updateTicket', {
      method: 'POST',
      body:   JSON.stringify(completedSessionData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //const data = await response.json();
    // console.log(data);
  }

  useEffect(() => {
    const completedSessionData = {
      "issuekey": SelectedOptionIssue, 
      "minutes": SessionDuration
      }
      console.log(completedSessionData)
      
    }, [SelectedOptionIssue]);
// <CoutdownCompontent numberofSessions={numberofSessions} setNumberOfSessions={setNumberOfSessions}>
// </CoutdownCompontent>
      console.log("Selected project in mianplanel is " + selectedProject)
  return (
    <div className='mainpanelcss'>
      <TopMenu></TopMenu>
      <Project selectedProject={selectedProject} setSelectedProject={setSelectedProject}></Project>
      <SelectedIssue selectedProject={selectedProject} selectedIssue={SelectedOptionIssue} setSelectedIssue={setSelectedIssue}> </SelectedIssue>
      <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>
      
    
    </div>
  );
};

export default MainPanel;
// <img src='https://i.kym-cdn.com/entries/icons/original/000/028/021/work.jpg' width='400' ></img>
     