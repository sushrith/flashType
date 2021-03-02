import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './typingChallengeContainer.css'
const TypingChallengeContainer = (  {selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,testInfo,onInputChange}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
               <ChallengeDetailsCard cardName="words" cardValue={words} />
               <ChallengeDetailsCard cardName="characters" cardValue={characters} />
               <ChallengeDetailsCard cardName="speed" cardValue={wpm} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge onInputChange={onInputChange} testInfo={testInfo} timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph}/>
            </div>
        </div>


    )
}

export default TypingChallengeContainer
