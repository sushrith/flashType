import './TypingChallenge.css'
import React from 'react'
import TestLetter from '../TestLetter/TestLetter'

const TypingChallenge = ({selectedParagraph,
    timerStarted,
    timeRemaining,
    testInfo,onInputChange}) => {
        return (
        <div className="typing-challenge">
            <p className="timer">
               00:
               {timeRemaining>=10?timeRemaining:`0${timeRemaining}`}
            </p>
           <p className="timer-info">
               {!timerStarted && "start typing to start the test"}
           </p>
           <div className="textarea-container">
            <div className="textarea-left">
            <div className="textarea test-paragraph">
                {
                    testInfo.map((letter,index)=>{
                        return <TestLetter key={index} letterInfo={letter}/> 
                    })
                }
            </div>
            </div>
            <div className="textarea-right">
            <textarea onChange={(e)=>onInputChange(e.target.value)} className="textarea" placeholder="start typing here"></textarea>
            </div>
            </div>
        </div>
        


    )
}

export default TypingChallenge
