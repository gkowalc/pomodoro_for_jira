import React, { useState } from "react";
import "./topmenu.css";

import Modal from "react-modal";
import Settings from "./Settings/Settings";

Modal.setAppElement("#root");

export default function TopMenu() {
  //https://www.newline.co/@dmitryrogozhny/how-to-display-modal-dialog-in-react-with-react-modal--dbf46cda
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Settings</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
<Settings></Settings>

        </div>
        <button onClick={toggleModal}>Close Settings</button>
      </Modal>
    </div>
  );
}
