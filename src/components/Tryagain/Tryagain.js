import React from 'react';
import "./tryagain.css"
const Tryagain = ({words,characters,wpm,startAgain}) => {
    return (
        <div>
            <div className="try-again-container">
                <h1>Test Results</h1>
                <div className="result-container">
                    <p>
                        <b>characters:</b>{characters}

                    </p>
                    <p>
                        <b>Words:</b>{words}

                    </p>
                    <p>
                        <b>Speed:</b>{wpm}wpm

                    </p>
                </div>
                <div>
                    <button className="end-buttons start-again-btn" onClick={startAgain}>Re-try</button>
                    <button className="end-buttons share-btn" onClick={()=>{window.open("https://www.facebook.com/sharer/sharer.php?u=github.com/sushrith","facebook-share-dialog","width=800,height=600")}}>Share</button>
                    <button className="end-buttons tweet-btn" onClick={()=>{window.open("https://www.twitter.com/intent/tweet/text=github.com/sushrith","Twitter","width=800,height=600")}}>Tweet</button>
                    </div>
            </div>

        </div>
    );
};

export default Tryagain;
