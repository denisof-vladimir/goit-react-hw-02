import { useState } from 'react'
import './Options.module.css'

export default function Options({ text, value, onChange}) {
    
    return (
        <button onClick={onChange}
                className="options-button"> {text} :  </button>
         
    );}