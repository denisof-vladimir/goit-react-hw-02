import css from "./Feedback.module.css";

export default function Feedback({clicks, totalFeedback,positive}) {
    
    return (
        <div className = {css.feedbackBox}>   
            <p className={css.feedbackP}> Good    : {clicks.good}   </p>
            <p className={css.feedbackP}> Neutral : {clicks.neutral}</p>
            <p className={css.feedbackP}> Bad     : {clicks.bad}    </p>
            <p className={css.feedbackP}> Total   : {totalFeedback} </p>
            <p className={css.feedbackP}> Positive: {positive} %    </p>    
         </div>  
    );}