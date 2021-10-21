import React from 'react';
  const ProjectIssueSelectorView = (props) => {
    console.log(props.nextStateName)
    React.useEffect(() => {
      if (props.props.SelectedOptionIssue != undefined) {
        const xx = props.nextStateName
        props.props.changePomodoroViewState(props.nextStateName)
      }
       }, [props.props.SelectedOptionIssue]);
        return (<div>
          Select Project/issue to start the pomodoro session!
        </div>)
       
  }


export default ProjectIssueSelectorView;
