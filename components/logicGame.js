import { openPopupWinner } from './popupWinner.js';
import { ENDOFGAME } from "./consts.js";
let ceils = document.querySelectorAll(".ceil");
// @ts-ignore
let Gamers = ['X', 'O'];
let WinnerCombination = [];
let i = 0;
function clearBoard() {
    // @ts-ignore
    for (let cell of ceils) {
        cell.textContent = '';
        cell.removeEventListener("click", step);
    }
}
function checkWinner(ceils) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // проверка на выйгрышную комбу
    for (let i = 0; i < combs.length; i++) {
        if (ceils[combs[i][0]].textContent == ceils[combs[i][1]].textContent &&
            ceils[combs[i][1]].textContent == ceils[combs[i][2]].textContent &&
            ceils[combs[i][0]].textContent != '') {
            WinnerCombination = combs[i];
            return true;
        }
    }
    return false;
}
function step() {
    if (this.textContent == '') {
        this.textContent = Gamers[i % 2];
        this.removeEventListener('click', step);
    }
    if (checkWinner(ceils)) {
        alert(this.textContent + "winner!");
        openPopupWinner(this.textContent);
        clearBoard();
        return;
    }
    i++;
    if (i == ENDOFGAME) {
        alert("DRAW");
        clearBoard();
        return;
    }
}
export default function start() {
    // @ts-ignore
    for (let cell of ceils) {
        cell.addEventListener('click', step);
    }
}
//# sourceMappingURL=logicGame.js.map