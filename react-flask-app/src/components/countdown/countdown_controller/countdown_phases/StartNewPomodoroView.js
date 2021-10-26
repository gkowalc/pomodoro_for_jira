import React from 'react';

import finishedSessionSound from '../../../../sounds/sound2.wav'
import ReactAudioPlayer from 'react-audio-player';
  const StartNewPomodoroView = (props) => {
    const changePomodoroState = (nextStateName) => {
      props.props.changePomodoroViewState(props.nextStateName)
    }
    return (<div>
      <button onClick={changePomodoroState}>
          Start Session
          </button>
          <ReactAudioPlayer
  src={finishedSessionSound}
  autoPlay={true}
  controls={false}
/>
    </div>)
  }


export default StartNewPomodoroView;
