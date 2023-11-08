import React, { useState } from "react";
import "./smileys-voter.css";

export default function SmileysVoter() {
    const [smileys, setSmileys] = useState([
        { id: 1, symbol: "😊", votes: 0 },
        { id: 2, symbol: "😄", votes: 0 },
        { id: 3, symbol: "😍", votes: 0 },
        { id: 4, symbol: "😎", votes: 0 },
        { id: 5, symbol: "🥳", votes: 0 },
    ]);

    const [showWinner, setShowWinner] = useState(false);
    const [winner, setWinner] = useState(null);

    const SmileyClick = (id) => {
        const updatedSmileys = smileys.map((smiley) =>
            smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
        );
        setSmileys(updatedSmileys);
    };

    const ShowResultsClick = () => {
        const winningSmiley = smileys.reduce((prev, current) =>
            prev.votes > current.votes ? prev : current
        );
        setWinner(winningSmiley.symbol);
        setShowWinner(true);
    };

    return (
        <div>
            <div className="smiley-container">
                {smileys.map((smiley) => (
                    <div
                        key={smiley.id}
                        className="smiley"
                        onClick={() => SmileyClick(smiley.id)}
                    >
                        {smiley.symbol} - {smiley.votes}
                    </div>
                ))}
            </div>
            <button className="show-results-button" onClick={ShowResultsClick}>
                Show Results
            </button>
            {showWinner && <div className="winner-text">Переможець: {winner}</div>}
        </div>
    );
}
