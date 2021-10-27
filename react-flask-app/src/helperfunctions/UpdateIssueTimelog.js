import React from 'react';
import { useState, useEffect } from 'react';
const UpdateIssueTimelog = (props) => {

  

      async function UpdateTicket() {
        const completedSessionData = {
          "issuekey": props.SelectedOptionIssue, 
          "minutes": props.SessionDuration
          }
          console.log(completedSessionData)
        const response = await fetch('/updateTicket', {
          method: 'POST',
          body:   JSON.stringify(completedSessionData),
          headers: {
            'Content-Type': 'application/json'
          }
          
        })
        console.log(response);
        
      }
      useEffect(() => {
          console.log("updated" + props.numberofSessions)
        UpdateTicket()
        }, [props.numberofSessions]);

      return (null) 
    //  useEffect(() => {
      //  const completedSessionData = {
       //   "issuekey": SelectedOptionIssue, 
      //    "minutes": SessionDuration
      //    }
      //  }, [SelectedOptionIssue]);
  
    
}

export default UpdateIssueTimelog;