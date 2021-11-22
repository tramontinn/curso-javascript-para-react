import './src/components/styles/settings/colors.css'
import './src/components/styles/generic/reset.css'
import './src/components/styles/elements/base.css'

import CardGame from './src/components/CardGame';
//import PlayerName from './src/components/PlayerName';
import BoardGame from './src/components/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
//const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML("beforeend",$htmlBoardGame);
//$root.insertAdjacentHTML("beforebegin", $htmlPlayerName);