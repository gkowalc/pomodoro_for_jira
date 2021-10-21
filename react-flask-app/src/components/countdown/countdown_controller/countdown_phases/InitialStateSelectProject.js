import React from 'react';
  const ProjectIssueSelectorView = (props) => {
    React.useEffect(() => {
      if (props.props.SelectedOptionIssue != undefined) {
        props.props.changePomodoroViewState('StartNewPomodoroView')
      }
       }, [props.props.SelectedOptionIssue]);
        return (<div>
          Select Project/issue to start the pomodoro session!
        </div>)
       
  }


export default ProjectIssueSelectorView;
