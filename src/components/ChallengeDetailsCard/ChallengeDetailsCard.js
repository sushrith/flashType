import './ChallengeDetailsCard.css'
import React from 'react'

const ChallengeDetailsCard = ({cardName,cardValue}) => {
    return (
        <div className="details-card-container">
            <div className="cardName">
            {cardName}
            </div>
            <div className="cardValue">
            {cardValue}
            </div>
        </div>
    )
}

export default ChallengeDetailsCard
