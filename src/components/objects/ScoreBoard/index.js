import PlayerName from "../../PlayerName";

function ScoreBoard() {
    return `
    <header class="score-board"> 
        ${PlayerName("Clebinho tchutchucao")}
        ${PlayerName("Pablo Marques treze")}
    </header>
    `;
}

export default ScoreBoard;
