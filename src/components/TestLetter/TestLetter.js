import './testLetter.css'
import React from 'react'

const TestLetter = ({letterInfo}) => {
    const status=letterInfo.status;
    let statusClass={
        notAttempted:"test-letter-notAttempted",
        correct:"test-letter-correct",
        incorrect:"test-letter-incorrect"
    }[status];
    return (
    <span className={`test-letter ${statusClass}`}>{letterInfo.testLetter}</span>
    );
}

export default TestLetter
