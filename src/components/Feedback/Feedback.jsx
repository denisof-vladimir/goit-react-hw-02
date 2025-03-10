import css from "./Feedback.module.css";

export default function Feedback({Good, Neutral, Bad, totalFeedback}) {
    
    const positive =Math.round((Good / totalFeedback) * 100);
   
    return (
        <div className = {css.feedbackBox}>   
            <p className={css.feedbackP}> Good:    {Good}   </p>
            <p className={css.feedbackP}> Neutral: {Neutral}</p>
            <p className={css.feedbackP}> Bad:     {Bad}    </p>
            <p className={css.feedbackP}> Total:   {totalFeedback}       </p>
            <p className={css.feedbackP}> Positive:{positive}            </p>
         </div>  
    );}