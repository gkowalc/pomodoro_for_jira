
import React, { ReactDOM, useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Settings() {
  const sessionDurationDefaultplusCached = (localStorage.getItem('sessionDuration') || 25)
  const breakDurationDefaulttplusCached = (localStorage.getItem('breakduration') || 5)
  const longBreakDurationDefaultplusCached = (localStorage.getItem('longBreakDuration') || 20)
  const frequencyLongBreakDefaultplusCached = (localStorage.getItem('frequencyLongBreak') || 4)



    const [ sessionDuration, setSessionDuration ] = useState(
      sessionDurationDefaultplusCached
    );
    const [ breakDuration, setbreakDuration ] = useState(
      breakDurationDefaulttplusCached
    );
    const [ longBreakDuration, setLongBreakDuration ] = useState(
      longBreakDurationDefaultplusCached
    );
    const [frequencyLongBreak, setfrequencyLongBreak ] = useState(
      frequencyLongBreakDefaultplusCached
    );

    React.useEffect(() => {
      localStorage.setItem('sessionDuration', sessionDuration);
    }, [sessionDuration]);
    React.useEffect(() => {
      localStorage.setItem('breakduration', breakDuration);
    }, [breakDuration]);
    React.useEffect(() => {
      localStorage.setItem('longBreakDuration',longBreakDuration);
    }, [longBreakDuration]);
    React.useEffect(() => {
      localStorage.setItem('frequencyLongBreak', frequencyLongBreak);
    }, [frequencyLongBreak]);
  return (
    <div> 
        Enter Session Duration
    <RangeSlider
    value={sessionDuration}
    onChange={changeEvent => setSessionDuration(changeEvent.target.value)}
  />
          Enter Break Duration
    <RangeSlider
    value={breakDuration}
    onChange={changeEvent => setbreakDuration(changeEvent.target.value)}
  />
          Enter  Long Break Duration
    <RangeSlider
    value={longBreakDuration}
    onChange={changeEvent => setLongBreakDuration(changeEvent.target.value)}
  />
          Frequency long break
    <RangeSlider
    value={frequencyLongBreak}
    onChange={changeEvent => setfrequencyLongBreak(changeEvent.target.value)}
  />
  

  </div>
  );
}


export default Settings