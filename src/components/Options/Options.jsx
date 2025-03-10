import { useState } from 'react'
import css from './Options.module.css'

export default function Options({onChange, totalFeedback}) {
    
    return (
       <div className={css.optionsBox}>
            <button onClick={onChange[0]}
                    className="options-button"> Good   :  </button>
            <button onClick={onChange[1]}
                    className="options-button"> Neutral:  </button>
            <button onClick={onChange[2]}
                    className="options-button"> Bad    :  </button> 
            {totalFeedback > 0 && (<button onClick={onChange[3]}
                    className="options-button"> Reset  :  </button> )}             
        </div> 
    );}



