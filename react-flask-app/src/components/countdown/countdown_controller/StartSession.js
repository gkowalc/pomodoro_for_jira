import React from 'react';
import './countdown.css'
import StartNewPomodoroView from './countdown_phases/StartNewPomodoroView';
import ProjectIssueSelectorView from './countdown_phases/InitialStateSelectProject';
import PomodoroBreakInProgress from './countdown_phases/PomodoroBreakInProgress';
import PomodoroBreakView from './countdown_phases/PomodoroBreakView';
import PomodoroActiveSession from './countdown_phases/PomodoroActiveSession';
const StartSession = (props) => {

    switch(props.currentPomodoroState) {

        case 'ProjectIssueSelectorView':
            const nextStateName = 'StartNewPomodoroView' 
        return (<div>
            <ProjectIssueSelectorView props={props} nextStateName={nextStateName}></ProjectIssueSelectorView>
        </div>)
        
    case 'StartNewPomodoroView':
    const nextStateName2='PomodoroActiveSession'
    return( 
       <StartNewPomodoroView nextStateName={nextStateName2} props={props}></StartNewPomodoroView>
         )
  
    case 'PomodoroActiveSession':
        const nextStateName3='PomodoroBreakView'
          return(<PomodoroActiveSession 
            timerdata={props.props}
            props={props}
            changePomodoroViewState={props.changePomodoroViewState}
            settings={props.settings}
            setnumberofsessions = {props.setnumberofsessions}
            nextStateName={nextStateName3}
          ></PomodoroActiveSession>)
    case 'PomodoroBreakView':
        const nextStatePomdooroSession='StartNewPomodoroView'
        const nextStateBreakSession='PomodoroBreakInProgress'
        const nextStateLastStationkSession='ProjectIssueSelectorView'
        
       const propslist = {nextStateLastStationkSession:'ProjectIssueSelectorView', nextStateBreakSession:'PomodoroBreakInProgress', nextStatePomdooroSession:'StartNewPomodoroView'}

    return(
  <PomodoroBreakView sessionstates={propslist} changePomodoroViewState={props.changePomodoroViewState}></PomodoroBreakView>)    
    
  case 'PomodoroBreakInProgress':
  const nextSession='StartNewPomodoroView'
        return (<PomodoroBreakInProgress settings={props.settings} 
          numberofsessions = {props.numberofsessions}
          changePomodoroViewState={props.changePomodoroViewState} 
          nextStateName={nextSession} 
          settings={props.settings}
          timerdata={props.breakduration} 
          setnumberofsessions = {props.setnumberofsessions}
          ></PomodoroBreakInProgress>)        

}

    return <div>No state found in case/switch</div>
   }    

   

   export default StartSession;