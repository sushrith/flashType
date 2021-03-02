import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './challengeSection.css';
const ChallengeSection=(
    {selectedParagraph,
    timerStarted,
    timeRemaining,
    words,
    characters,
    wpm,testInfo,onInputChange,startAgain}
)=> {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
            Take a speed test now!
            </h1>
            <TestContainer startAgain={startAgain} onInputChange={onInputChange} testInfo={testInfo} selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted}
            words={words} characters={characters} wpm={wpm}/>
        </div>
    )
};

export default ChallengeSection
