import React, { useEffect } from 'react';
import Modal from "react-modal";
import { useState} from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"
import CacheCleaner from '../../../../helperfunctions/CacheCleaner';
import useSound from 'use-sound';

import finishedSessionSound from '../../../../sounds/sound.wav'
import ReactAudioPlayer from 'react-audio-player';
  const PomodoroActiveSession = (props) => {
    const [issoundplayinh, setsoundplaying] = useState(false)
    const onClickHandler = () => {
    
       return (<div></div>)
  }
    const pomodoroTimerKiller = (nextStateName)  => {
      setsoundplaying(!issoundplayinh);
      props.changePomodoroViewState(props.nextStateName);
      props.setnumberofsessions();
      
      const list = ["minutes", "seconds", "hours"]
      CacheCleaner(list)
      
         }
 
    

    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
     
      setModalOpen(!modalOpen)
      props.changePomodoroViewState(props.nextStateName);
  
    }
    const makeStop = () => {
      setModalOpen(!modalOpen);
    }
    const toggleModal = () => {
      console.log("trying to close nodal")
      setModalOpen(!modalOpen);
    }
     return (<div>
      <PomodoRoTimer props={props.timerdata} pomodoroTimerKiller={pomodoroTimerKiller} ></PomodoRoTimer>
    <button onClick={makeStop}>
        Stop current session
        </button>
        <ReactAudioPlayer
  src={finishedSessionSound}
  autoPlay={true}
  controls={false}
/>
        <Modal
      isOpen={modalOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog2"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >  
    <button onClick={closeModal} >Are you sure? </button> <button onClick={makeStop} >go back to pomodoro</button>
   
    </Modal>
  </div>)
  }


export default PomodoroActiveSession;
