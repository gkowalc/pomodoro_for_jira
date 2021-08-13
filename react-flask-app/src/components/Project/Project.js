
import React, { useState, useEffect } from 'react';
import './project.css'
const Project = (props) => {
  const [projectKeys, setProjectKeys] = useState([]);
  function fetchProjectKeysHandler() {
    fetch('http://localhost:5000/getAvaialbleProjectKeys')
    .then(response => response.json())
  .then(data => 
  setProjectKeys(data));
  

      };
     
      useEffect(() => {
        fetchProjectKeysHandler();
        }, []);



    function Options({ options }) {
        return (
            options.map(option => 
                        <option>                                   
                        {option}
                        </option>)
                       );
    }
    
    function handleChange(event){
     // setSelectedOption(event.target.value)
     props.setSelectedProject(event.target.value)
  }
  return (
    
    <div className='project'>
      Project
    
      <select  onChange={handleChange} name="selectList" id="selectList" value={props.selectedProject}>
      <Options options={projectKeys} />
</select>
  </div>
  );
};

export default Project;
