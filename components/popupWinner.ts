
let popupWinner: HTMLElement = document.querySelector(".popup_winner");


let openPopupWinner = (text:string) => {
    popupWinner.classList.add("popup_opened");

}

let closePopupWinner = () => { popupWinner.classList.remove("popup_opened"); }



export {
    openPopupWinner,
    closePopupWinner
}