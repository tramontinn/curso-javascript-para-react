import PlayerName from "../../PlayerName";
import PlayerScore from "../../PlayerScore";
import VsPlayer from "../../VsPlayer";
import './style.css'

function ScoreBoard() {
    return `
    <header class="score-board"> 
        ${PlayerName("Player 1")}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(1)}
        ${PlayerName("Player 2")}
    </header>
    `;
}

export default ScoreBoard;
