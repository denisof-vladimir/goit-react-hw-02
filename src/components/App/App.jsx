import { useState, useEffect } from 'react'
// import reactLogo from './src/assets/react.svg'
// import viteLogo from '/vite.svg'
import css from "./App.module.css";
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function GetLocalStorage (key) {
  const saved = window.localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return [0,0,0];
}

function App() {
  const getFeedBack=GetLocalStorage ("feedback-cafe");
  const [clickGood, setClickGood]= useState(getFeedBack[0]);
  const [clickNeutral, setClickNeutral]= useState(getFeedBack[1]);
  const [clickBad, setClickBad]= useState(getFeedBack[2]);

  const handleGood = () => {
    setClickGood(clickGood+1);
    }
  const handleNeutral = () => {
    setClickNeutral(clickNeutral+1);
    }
  const handleBad = () => {
    setClickBad(clickBad+1);
  }
  const handleReset = () => {
    setClickGood(0);
    setClickNeutral(0);
    setClickBad(0);
  }
  const totalFeedback =  clickGood+ clickNeutral+ clickBad;
  useEffect(() => {
     window.localStorage.setItem("feedback-cafe", JSON.stringify([
        clickGood, clickNeutral, clickBad]));
        });
  return (
    <div className="app-box">
      <Description  />
      <div className={css.optionsBox}>
        <Options text="Good" value={clickGood} onChange={handleGood}/>
        <Options text="Neutral" value={clickNeutral} onChange={handleNeutral} />
        <Options text="Bad" value={clickBad} onChange={handleBad} />
        {totalFeedback > 0 && (<Options text="Reset" onChange={handleReset} />)}
      </div>  
      
        {totalFeedback==0 &&  (<Notification/>)} 
         
        {totalFeedback > 0 && (    
              <Feedback Good={clickGood}
                    Neutral={clickNeutral}
                    Bad={clickBad} 
                    totalFeedback={totalFeedback} />)}
     
    </div>
  );
}

export default App
