import React from 'react'
import Tryagain from '../Tryagain/Tryagain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './testContainer.css'
const TestContainer=(  {selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,testInfo,onInputChange,startAgain})=> {
    
    return (
        <div className="test-container">   
        {timeRemaining>0?(<div className="typing-challenge-container">
            <TypingChallengeContainer onInputChange={onInputChange} selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted}
            testInfo={testInfo} words={words} characters={characters} wpm={wpm}/>
            </div>):<div className="try-again-con">
                <Tryagain startAgain={startAgain} words={words} characters={characters} wpm={wpm}/>
            </div>
        }
            
             
        </div>
    );
}

export default TestContainer
