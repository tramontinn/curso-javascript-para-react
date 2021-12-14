import ArrowDown from "../../ArrowDown";
import PlayerName from "../../PlayerName";
import PlayerScore from "../../PlayerScore";
import VsPlayer from "../../VsPlayer";
import './style.css'

function ScoreBoard() {
    return `
    <header class="score-board">
        ${ArrowDown(2)} 
        ${PlayerName("Player 1")}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(3)}
        ${PlayerName("Player 2")}
    </header>
    `;
}

export default ScoreBoard;
