import React from 'react';
import { useState, useEffect } from 'react';


const PomodoRoTimer = (props) => {
   
    const [[h, m, s], setTime] = useState([props.props.hours, props.props.minutes, props.props.seconds]);
    console.log([h, m, s])

    const tick = () => {
        
        if ((props.props.paused) || props.props.sessionCompleted) return;
        if (h == 0 && m == 0 && s == 0) {
          console.log("it is 0.0.0!!")
          props.pomodoroTimerKiller();
        return }
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
        localStorage.setItem('hours', h);
        localStorage.setItem('minutes', m);
        localStorage.setItem('seconds', s);
        return () => clearInterval(timerID);
  
  
      });
   
      React.useEffect(() => {
        
      }, [props.props.hours, props.props.minutes, props.props.seconds]);
      

    return (
      <div>  
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        <div>{props.props.sessionCompleted ? "Time's up!" : ''}</div>
      </div>
      

    );
  };
   // <CompletedSessionCounter numberofSessions={numberofSessions}></CompletedSessionCounter>


export default PomodoRoTimer;

