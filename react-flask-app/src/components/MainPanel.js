import React from 'react';
import { useState, useEffect } from 'react';
import './MainPanel.css' 
import CoutdownCompontent from './countdown/countdown_controller/Countdown';
import TopMenu from './HeaderMenu/TopMenu';
import Project from './Project/Project';
import SelectedIssue from './Issue/SelectedIssue'; 
import CompletedSessionCounter from './countdown/CompletedSessionsCounter/CompletedSessionCounter';
import CacheCleaner from '../helperfunctions/CacheCleaner';
const MainPanel = () => {

const [numberofSessions, setNumberOfSessions] = useState(localStorage.getItem('numberofSessions'))
const [selectedProject, setSelectedProject] = useState(localStorage.getItem('selectedProject'))
const [SelectedOptionIssue, setSelectedIssue] = useState(localStorage.getItem('SelectedOptionIssue'));
const [SessionDuration, setSessionDuration] = useState();

useEffect(() => {
   UpdateTicket()
  }, [numberofSessions]);

  useEffect(() => {
    localStorage.setItem("selectedProject", selectedProject)
    localStorage.setItem('SelectedOptionIssue', SelectedOptionIssue)
    localStorage.setItem('numberofSessions', numberofSessions)
   }, [selectedProject, SelectedOptionIssue, numberofSessions]);
  useEffect(() => {

   }, [selectedProject]);

  async function UpdateTicket() {
    const completedSessionData = {
      "issuekey": SelectedOptionIssue, 
      "minutes": SessionDuration
      }
    const response = await fetch('/updateTicket', {
      method: 'POST',
      body:   JSON.stringify(completedSessionData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  const incrementNumberOfCompletedPomodoro = () => {
    setNumberOfSessions(numberofSessions + 1)
  }
  useEffect(() => {
    const completedSessionData = {
      "issuekey": SelectedOptionIssue, 
      "minutes": SessionDuration
      }
    
      
    }, [SelectedOptionIssue]);
// 
  return (
    <div className='mainpanelcss'>
      <TopMenu></TopMenu>
      <CoutdownCompontent numberofSessions={numberofSessions} setNumberOfSessions={incrementNumberOfCompletedPomodoro} selectedProject={selectedProject} SelectedOptionIssue={SelectedOptionIssue}>
 </CoutdownCompontent>
      <Project selectedProject={selectedProject} setSelectedProject={setSelectedProject}></Project>
      <SelectedIssue selectedProject={selectedProject} selectedIssue={SelectedOptionIssue} setSelectedIssue={setSelectedIssue}> </SelectedIssue>
      <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>
      
    
    </div>
  );
};

export default MainPanel;
