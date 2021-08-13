import React from 'react';
import { useState, useEffect } from 'react';


const PomodoRoTimer = (props) => {
   
    const [[h, m, s], setTime] = useState([props.propsdata.hours, props.propsdata.minutes, props.propsdata.seconds]);
    console.log([h, m, s])
    const tick = () => {
        
        if ((props.propsdata.paused) || props.propsdata.sessionCompleted) return;
        if (h === 0 && m === 0 && s === 0) props.propsdata.setsSssionCompleted(true);
        else if (m === 0 && s === 0) {
          setTime([h - 1, 59, 59]);
  
        } else if (s == 0) {
          setTime([h, m - 1, 59]);
        } else {
          setTime([h, m, s - 1]);
        }
      };
    
  
    
      useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
  
  
      });
   


    return (
      <div>
        
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        <div>{props.propsdata.sessionCompleted ? "Time's up!" : ''}</div>
       
       
       
      </div>
      

    );
  };
   // <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>


export default PomodoRoTimer;

