import React from 'react';
import { useState, useEffect } from 'react';
import './selectedissue.css'

const SelectedIssue = (props) => {

  const [IssueKeys, setIssueKeys] = useState([]);
  const [IssueKeyPlusSummary, setIssueKeyPlusSummary] = useState([]);


  


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

      function FetchSummaryForIssueKey() {
          console.log(IssueKeys)
          setIssueKeyPlusSummary([])
          for (const i of IssueKeys) {

            var url = '/getIssueSummary/' + i
            console.log("issue summary path is" + url)
            console.log(i)
            fetch(url)
            .then(response => response.json())     
            .then(data =>  
              setIssueKeyPlusSummary(oldArray => [...oldArray,  ([i + data])]));
            
          }
      }
     
     useEffect(() => {
      console.log(props.selectedProject)
      if ( props.selectedProject != undefined) {
        FetchIssueHandler()
        FetchSummaryForIssueKey();
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
      <Options options={IssueKeyPlusSummary} /></select></div>
  );
  }

export default SelectedIssue;
