import PlayerName from "../../PlayerName";
import VsPlayer from "../../VsPlayer";
import './style.css'

function ScoreBoard() {
    return `
    <header class="score-board"> 
        ${PlayerName("Player 1")}
        ${VsPlayer()}
        ${PlayerName("Player 2")}
    </header>
    `;
}

export default ScoreBoard;
