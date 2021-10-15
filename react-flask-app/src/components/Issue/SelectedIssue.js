import React from 'react';
import { useState, useEffect } from 'react';
import './selectedissue.css'

const SelectedIssue = (props) => {

  const [IssueKeys, setIssueKeys] = useState([]);
  const [IssueKeyPlusSummary, setIssueKeyPlusSummary] = useState({});

  const  fetchIssueHandler = async () => {
    if (props.selectedProject != undefined) {
    var url = '/getIssueKeys/' + props.selectedProject
    const response = await fetch(url)
    const json = await response.json()
  setIssueKeys(json)
}
      };

       const  fetchSummaryForIssueKey =  async () => {
      
          var temp_dict = {}
          for (const i of IssueKeys) {
            var url = '/getIssueSummary/' + i
            const response = await fetch(url)
            const json = await response.json()
             temp_dict[i] = json       
          }
          setIssueKeyPlusSummary(temp_dict)
         
      }
     
     useEffect(() => {
      if ( props.selectedProject != undefined) {
      fetchIssueHandler();
}
        }, [props.selectedProject]);

    useEffect(() => {
  
      setIssueKeyPlusSummary({});  
      fetchSummaryForIssueKey();
            }, [IssueKeys]);
    

    function Options({ options }) {
        return (
          Object.values(options).map(option => 
                        <option>                                   
                        {option}
                        </option>)
                       );
    }
    
    function handleChange(event){
      const selectedValue = event.target.value
     var key = Object.keys(IssueKeys).filter(function(key) {return IssueKeyPlusSummary[key] === selectedValue})[0];
      props.setSelectedIssue(selectedValue)
  }

  return (
    
    <div className='selectedissue'>
      Issue:
      <select  onChange={handleChange} name="selectIssueList" id="selectIssueList" value={props.SelectedOptionIssue}>
            <Options options={IssueKeyPlusSummary} /></select></div>
  );
  }

export default SelectedIssue;
