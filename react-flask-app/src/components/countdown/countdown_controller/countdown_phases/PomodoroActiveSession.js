import React from 'react';
import Modal from "react-modal";
import { useState, useEffect } from 'react';
import PomodoRoTimer from "../../pomodorotimer/pomodoroTimer"

  const PomodoroActiveSession = (props) => {
    const pomodoroTimerKiller = (nextStateName)  => {
      props.props.changePomodoroViewState(props.nextStateName)
    }
    

    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
      props.timerdata.changePomodoroStatus();
      setModalOpen(!modalOpen)
      //localStorage.setItem('ispaused', !paused);
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
