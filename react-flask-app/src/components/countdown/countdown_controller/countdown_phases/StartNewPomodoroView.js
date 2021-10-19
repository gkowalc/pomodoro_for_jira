import React from 'react';
  const StartNewPomodoroView = (props) => {
    const changePomodoroStatus = () => {
      //setPaused(!paused)
      //localStorage.setItem('ispaused', !paused)
      props.startPomodoro(true)
    }
    
    return (<div>
      <button onClick={props.startPomodoro}>
          Start Session
          </button>
    </div>)
  }


export default StartNewPomodoroView;
