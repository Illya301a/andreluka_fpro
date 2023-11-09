import React, { Component } from "react";
import "./smileys-voter.css";

export default class SmileysVoter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smileys: [
                { id: 1, symbol: "😊", votes: 0 },
                { id: 2, symbol: "😄", votes: 0 },
                { id: 3, symbol: "😍", votes: 0 },
                { id: 4, symbol: "😎", votes: 0 },
                { id: 5, symbol: "🥳", votes: 0 },
            ],
            showWinner: false,
            winner: null,
        };
    }

    smileyClick = (id) => {
        const updatedSmileys = this.state.smileys.map((smiley) =>
            smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
        );
        this.setState({ smileys: updatedSmileys });
    };

    showResultsClick = () => {
        const winningSmiley = this.state.smileys.reduce((prev, current) =>
            prev.votes > current.votes ? prev : current
        );
        this.setState({ winner: winningSmiley.symbol, showWinner: true });
    };

    render() {
        const { smileys, showWinner, winner } = this.state;
        return (
            <div>
                <div className="smiley-container">
                    {smileys.map((smiley) => (
                        <div
                            key={smiley.id}
                            className="smiley"
                            onClick={() => this.smileyClick(smiley.id)}
                        >
                            {smiley.symbol} - {smiley.votes}
                        </div>
                    ))}
                </div>
                <button className="show-results-button" onClick={this.showResultsClick}>
                    Show Results
                </button>
                {showWinner && <div className="winner-text">Переможець: {winner}</div>}
            </div>
        );
    }
}
