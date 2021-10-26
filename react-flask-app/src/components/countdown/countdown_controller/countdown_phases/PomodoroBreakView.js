import React from 'react';
import { useState, useEffect } from 'react';
import Modal from "react-modal";
import CacheCleaner from '../../../../helperfunctions/CacheCleaner';
import beginningSessionSound from '../../../../sounds/sound2.wav'
import ReactAudioPlayer from 'react-audio-player';
  const PomodoroBreakView = (props) => {
   
    const [modalOpen, setModalOpen] = useState(true);

    const startAbreak = () => {
      setModalOpen(!modalOpen)
      props.changePomodoroViewState(props.sessionstates.nextStateBreakSession)
      
    }
    const makeStop = () => {
        setModalOpen(!modalOpen);
         props.changePomodoroViewState(props.sessionstates.nextStatePomdooroSession)
      }
      const toggleModal = () => {
    
        setModalOpen(!modalOpen);
      }
      const lastSession = () => {
        setModalOpen(!modalOpen);
        CacheCleaner("all")
        props.changePomodoroViewState(props.sessionstates.nextStateLastStationkSession)
      }
   return (<div>
        Time for a break!
        <Modal
      isOpen={modalOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog3"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >  
    <button onClick={startAbreak} >Start a break </button> <button onClick={makeStop} >start new pomodoro</button>
    <button onClick={lastSession}>Void last session</button>
    <ReactAudioPlayer
  src={beginningSessionSound}
  autoPlay={true}
  controls={false}
/>
   
    </Modal>
      </div>)
  }


export default PomodoroBreakView;
