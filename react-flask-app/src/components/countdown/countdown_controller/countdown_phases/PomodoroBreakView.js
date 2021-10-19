import React from 'react';
import { useState, useEffect } from 'react';
import Modal from "react-modal";
  const PomodoroBreakView = (props) => {
    const [modalOpen, setModalOpen] = useState(true);
    const startAbreak = () => {
      setModalOpen(!modalOpen)
      return(<div>Break started!</div>)
    }
    const makeStop = () => {
        setModalOpen(!modalOpen);
        props.breakprop.setBreakStatus()
      }
      const toggleModal = () => {
        console.log("trying to close nodal")
        setModalOpen(!modalOpen);
      }
      const lastSession = () => {
        setModalOpen(!modalOpen);
        props.breakprop.setBreakStatus();
        props.breakprop.changePomodoroStatus();
        console.log("lastsession")
      }

       
 React.useEffect(() => {
    console.log("hell!o")
   }, [ startAbreak]);
   
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
   
    </Modal>
      </div>)
  }


export default PomodoroBreakView;
