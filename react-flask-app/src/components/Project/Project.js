
import React, { useState, useEffect } from 'react';
import './project.css'
import Options from './project_options/Project_options';

const Project = (props) => {
  const [projectKeys, setProjectKeys] = useState([]);
  function fetchProjectKeysHandler() {
    fetch('/getAvaialbleProjectKeysNamesDictionary')
    .then(response => response.json())
  .then(data => 
  setProjectKeys(data));
  

      };
     
      useEffect(() => {
        fetchProjectKeysHandler();
        }, []);



   
    
    function handleChange(event){
     // setSelectedOption(event.target.value)
    const selectedValue = event.target.value
    var key = Object.keys(projectKeys).filter(function(key) {return projectKeys[key] === selectedValue})[0];

    console.log(selectedValue)
    console.log(key)
     props.setSelectedProject(key)
 
  }
  return (
    
    <div className='project'>
      Project
    
      <select  onChange={handleChange} name="selectList" id="selectList" defaultvalue={props.selectedProject}>
      <Options props={projectKeys} />
</select>
  </div>
  );
};

export default Project;
