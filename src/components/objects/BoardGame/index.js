import './styles.css';
import CardFrontBack from '../../CardFrontBack';
import cards from './data';

function BoardGame(amountCards) {
    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    }

    const swapPlayer = () => {
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        const $arrowDown = document.querySelector('.arrow-down');
        
        $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
        
        if ($cardsActive.lenght == 2) {
            setTimeout(() => {
                flipAndHideCards($cardsActive);
                swapPlayer();
            }, 1000);

        }
    }
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    // const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return `
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
        `;
}
    
export default BoardGame;
