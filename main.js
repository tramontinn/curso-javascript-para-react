import './src/components/styles/settings/colors.css'
import './src/components/styles/generic/reset.css'
import './src/components/styles/elements/base.css'


import ScoreBoard from './src/components/objects/ScoreBoard';
import BoardGame from './src/components/objects/BoardGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML
("beforeend",
`
    ${ScoreBoard()}
    ${BoardGame(6)}
    `
);