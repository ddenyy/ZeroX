let ArrCeils: NodeList = document.querySelectorAll(".ceil");
let Gamers = ['X', 'O'];
let WinnerCombination: Array<number> = [];

function startGame():void {
    start(ArrCeils);
}

function clearBoard(ceils: NodeList): void{
    // @ts-ignore
    for (let cell of ceils) {
        cell.textContent = '';
        cell.removeEventListener;
    }
}

function checkWinner (ceils: NodeList): boolean {
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
        if (
            ceils[combs[i][0]].textContent == ceils[combs[i][1]].textContent &&
            ceils[combs[i][1]].textContent == ceils[combs[i][2]].textContent &&
            ceils[combs[i][0]].textContent != ''
        ) {
            WinnerCombination = combs[i];
            return true;
        }
    }
    return false;
}

function start(ceils: NodeList) {
    let ENDOFGAME: number = 9;
    let i: number = 0;
    // @ts-ignore
    for (let cell of ceils) {
        cell.addEventListener('click', function step() {
            console.log(i);
            if (this.textContent == '') {
                this.textContent = Gamers[i % 2];
                this.removeEventListener('click', step);
            }
            if (checkWinner(ceils)) {
                alert(this.textContent + "winner!");

                clearBoard(ceils);
                return;
            }
            i++
            if (i == ENDOFGAME) {
                alert("DRAW");
                clearBoard(ceils);
                return;
            }
        });
    }
}
