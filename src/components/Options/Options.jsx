import { useState } from 'react'
import css from './Options.module.css'

export default function Options({onChange, onReset, totalFeedback}) {
    
    return (
       <div className={css.optionsBox}>
            <button onClick={() => {onChange("good")}}
                    className="options-button"> Good   :  </button>
            <button onClick={() => {onChange("neutral")}}
                    className="options-button"> Neutral:  </button>
           <button onClick={() => {onChange("bad")}}
                    className="options-button"> Bad    :  </button> 
            {totalFeedback > 0 && (<button onClick={onReset}
                    className="options-button"> Reset  :  </button> )}             
        </div> 
    );}



