import React from 'react';
import { useState, useEffect } from 'react';
import './selectedissue.css'

const SelectedIssue = (props) => {

  const [IssueKeys, setIssueKeys] = useState([]);
  // const [SelectedOptionIssue, setSelectedIssue] = useState();
  
  function FetchIssueHandler() {
    console.log(props.selectedProject)
    if (props.selectedProject != undefined) {
    var url = '/getIssueKeys/' + props.selectedProject
    console.log('url is' + url)
    fetch(url)
    .then(response => response.json())
  .then(data => 
  setIssueKeys(data));
}
      };
     
     useEffect(() => {
      console.log(props.selectedProject)
      if ( props.selectedProject != undefined) {
        FetchIssueHandler();
        console.log('hello' + props.selectedProject) }
        }, [props.selectedProject]);



    function Options({ options }) {
        return (
            options.map(option => 
                        <option>                                   
                        {option}
                        </option>)
                       );
    }
    
    function handleChange(event){
      props.setSelectedIssue(event.target.value)
  }

  return (
    
    <div className='selectedissue'>
      Issue:
      <select  onChange={handleChange} name="selectIssueList" id="selectIssueList" value={props.SelectedOptionIssue}>
      <Options options={IssueKeys} /></select></div>
  );
  }

export default SelectedIssue;
