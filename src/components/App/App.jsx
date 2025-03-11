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
    return {good:0,
            neutral:0,
            bad:0};
}

function App() {

  const [clicks, setClicks]= useState(GetLocalStorage ("feedback-cafe"));

  const handleFeedBack = (ev) => {
    setClicks({...clicks, [ev]: clicks[ev] + 1  });
   };

  const handleReset = () => {
    setClicks({good:0,
               neutral:0,
               bad:0});
    }

  let positive = 0;
  const totalFeedback =  clicks.good+ clicks.neutral+ clicks.bad;
  if (totalFeedback>0) {
    positive = Math.round((clicks.good/ totalFeedback) * 100);}
 
  useEffect(() => {
     window.localStorage.setItem("feedback-cafe", JSON.stringify(clicks));}, [clicks]);

  return (
    <div className="app-box">
      <Description  />
 
      <Options onChange={handleFeedBack} onReset={handleReset}
               totalFeedback={totalFeedback}/>
      
      {totalFeedback==0 &&  (<Notification/>)}
      {totalFeedback > 0 &&  
        <Feedback clicks={clicks} totalFeedback={totalFeedback} positive={positive} /> } 
         
    </div>
  );
}

export default App
