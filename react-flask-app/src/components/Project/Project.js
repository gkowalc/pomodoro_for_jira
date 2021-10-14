
import React, { useState, useEffect } from 'react';
import './project.css'
import Options from './project_options/Project_options';

const Project = (props) => {
  const [projectKeys, setProjectKeys] = useState([]);
  function fetchProjectKeysHandler() {
    fetch('/getAvaialbleProjectKeys')
    .then(response => response.json())
  .then(data => 
  setProjectKeys(data));
  

      };
     
      useEffect(() => {
        fetchProjectKeysHandler();
        }, []);



   
    
    function handleChange(event){
     // setSelectedOption(event.target.value)
     props.setSelectedProject(event.target.value)
  }
  return (
    
    <div className='project'>
      Project
    
      <select  onChange={handleChange} name="selectList" id="selectList" value={props.selectedProject}>
      <Options props={projectKeys} />
</select>
  </div>
  );
};

export default Project;
