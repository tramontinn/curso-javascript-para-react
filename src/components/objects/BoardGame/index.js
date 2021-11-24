import './styles.css';
import CardFrontBack from '../../CardFrontBack';

function BoardGame(amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
        `;
}

export default BoardGame;
