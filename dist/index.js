var ArrCeils = document.querySelectorAll(".ceil");
var Gamers = ['X', 'O'];
var WinnerCombination = [];
function startGame() {
    start(ArrCeils);
}
function clearBoard(ceils) {
    // @ts-ignore
    for (var _i = 0, ceils_1 = ceils; _i < ceils_1.length; _i++) {
        var cell = ceils_1[_i];
        cell.textContent = '';
        cell.removeEventListener;
    }
}
function checkWinner(ceils) {
    var combs = [
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
    for (var i = 0; i < combs.length; i++) {
        if (ceils[combs[i][0]].textContent == ceils[combs[i][1]].textContent &&
            ceils[combs[i][1]].textContent == ceils[combs[i][2]].textContent &&
            ceils[combs[i][0]].textContent != '') {
            WinnerCombination = combs[i];
            return true;
        }
    }
    return false;
}
function start(ceils) {
    var ENDOFGAME = 9;
    var i = 0;
    // @ts-ignore
    for (var _i = 0, ceils_2 = ceils; _i < ceils_2.length; _i++) {
        var cell = ceils_2[_i];
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
            i++;
            if (i == ENDOFGAME) {
                alert("DRAW");
                clearBoard(ceils);
                return;
            }
        });
    }
}
//# sourceMappingURL=index.js.map