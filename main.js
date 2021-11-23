import './src/components/styles/settings/colors.css'
import './src/components/styles/generic/reset.css'
import './src/components/styles/elements/base.css'

//import CardGame from './src/components/CardGame';
import PlayerName from './src/components/PlayerName';
import BoardGame from './src/components/objects/BoardGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML
("beforeend",
`
    ${PlayerName("Player 1")}
    ${PlayerName("Player 2")}
    ${BoardGame(6)}
    `
);