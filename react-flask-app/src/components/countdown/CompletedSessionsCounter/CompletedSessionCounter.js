import React from 'react';
import { useState, useEffect } from 'react';
import './completedsessioncounter.css'
  const CompletedSessionCounter = (prop) => {

    return (
        <div> Current Sessions count : {prop.numberofSessions} </div>
    
      ); 
  }


export default CompletedSessionCounter;
