import React from 'react';
  const StartNewPomodoroView = (props) => {
    const changePomodoroState = (nextStateName) => {
      console.log("error")
      console.log(nextStateName)
      props.props.changePomodoroViewState(props.nextStateName)
    }
    return (<div>
      <button onClick={changePomodoroState}>
          Start Session
          </button>
    </div>)
  }


export default StartNewPomodoroView;
