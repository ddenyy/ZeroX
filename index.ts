
import start from './components/logicGame.js';
import {closePopupWinner} from './components/popupWinner.js';

let ceils: NodeList = document.querySelectorAll(".ceil");
let buttonStart = document.querySelector(".button_start");
let buttonClosePopupWinnner = document.querySelector(".popup__button-exit_winner");
let popupWinnner = document.querySelector(".popup__window");


// ф-ция обработчик клика на кнопку старта
function handleClickButtonStart() {
    start();
    buttonStart.classList.add("button_start_active");
    for (let i: number = 0; i < ceils.length; i++) {
        // @ts-ignore
        ceils[i].classList.add("ceil_active");
    }
}

// ф-ция обработчик закрытия попапа победителя
function handleClosePopupWinner() {
    closePopupWinner();
}



// слушатель на кнопку старта
buttonStart.addEventListener("click", handleClickButtonStart);

// слушатель на закрытие попапа после победы (popupWinner)
buttonClosePopupWinnner.addEventListener("click", handleClosePopupWinner);