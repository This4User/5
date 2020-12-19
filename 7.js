// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let  gameIsLive = true;
let xIsNext = true;
let counter = 0;
let FreeFieldCounter = 0;

//game constant
const xSymbol = 'Crosses';
const oSymbol = 'Circles';

//function
const  letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;
const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x' || letter === 'o') {
        alert(`${letterToSymbol(letter)} has won!`);
        statusDiv.classList.add('won_status')
    }
};

const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    // winning combination
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        gameIsLive = false;
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    }else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        gameIsLive = false;
        handleWin(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        gameIsLive = false;
        handleWin(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        gameIsLive = false;
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        gameIsLive = false;
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }else if (topRight && topRight === middleRight && topRight === bottomRight) {
        gameIsLive = false;
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        gameIsLive = false;
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        gameIsLive = false;
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        alert('Nobody Won!');
        cellDivs[0].classList.add('not_won');
        cellDivs[1].classList.add('not_won');
        cellDivs[2].classList.add('not_won');
        cellDivs[3].classList.add('not_won');
        cellDivs[4].classList.add('not_won');
        cellDivs[5].classList.add('not_won');
        cellDivs[6].classList.add('not_won');
        cellDivs[7].classList.add('not_won');
        cellDivs[8].classList.add('not_won');
    }
};

//event Handlers
const handleReset = () =>{
    xIsNext = true;
    gameIsLive = true;
    statusDiv.innerHTML = 'Click on any field to start';
    counter = 0;
    for (const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
        cellDiv.classList.remove('not_won');
        statusDiv.classList.remove('won_status');
        statusDiv.classList.remove('not_won_status');
    }
};

const handleCellClick = (e) => {
    FreeField();
    const classList = e.target.classList;
    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
    classList.add('o');
    if (FreeFieldCounter >= 2) {
        let field = getRandom();
        while (cellDivs[field].classList === e.target.classList || cellDivs[field].classList.contains('x') || cellDivs[field].classList.contains('o')) {
            field = getRandom();
        }

        function x() {
            //cellDivs[field].classList.add('x');
            if (!(statusDiv.classList.contains('won_status'))) {
                cellDivs[field].classList.add('x');
            }
        }

        statusDiv.innerHTML = `Crosses are next`;

        function ChangeStatusToCircles() {
            statusDiv.innerHTML = `Circles are next`;
        }

        if (!(statusDiv.classList.contains('won_status'))) {
            setTimeout(ChangeStatusToCircles, 500);
        }
    }
    //console.log(counter);
    setTimeout(x,500);
    setTimeout(checkGameStatus, 501);//checking crosses
    setTimeout(checkGameStatus, 100);
};




// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}

//trying to fix trouble with free field for crosses
function FreeField()  {
    FreeFieldCounter = 0;
    for (let j = 0; j< 8; j++){
        if (!(cellDivs[j].classList.contains('x')) && !(cellDivs[j].classList.contains('o'))){
            FreeFieldCounter = FreeFieldCounter +1;
        }
    }
    console.log(FreeFieldCounter);
}
//trying get random crosses
function getRandom()
{
    return (Math.floor(Math.random()*8))
}
// Third way
/*   classList.add('x');
let field = getRandom();
while (cellDivs[field].classList === e.target.classList || cellDivs[field].classList.contains('x') || cellDivs[field].classList.contains('o')){
    field = getRandom();
}
cellDivs[field].classList.add('o');
 */
/* //Second way
if (cellDivs[field].classList !== e.target.classList && !cellDivs[field].classList.contains('x') && !cellDivs[field].classList.contains('o')){
    cellDivs[field].classList.add('o');
}else if(cellDivs[secondField].classList !== e.target.classList && !cellDivs[secondField].classList.contains('x') && !cellDivs[secondField].classList.contains('o') && !(field === secondField)) {
    cellDivs[secondField].classList.add('o');
}else if (cellDivs[thirdField].classList !== e.target.classList && !cellDivs[thirdField].classList.contains('x') && !cellDivs[thirdField].classList.contains('o') && !(secondField === thirdField)){
    cellDivs[thirdField].classList.add('o');
}
 */
// Thirst way
/*    if(!cellDivs[field].classList.contains('o') && !cellDivs[field].classList.contains('x')){
       cellDivs[field].classList.add('o');
   }else if (!cellDivs[field].classList.contains('o') && !cellDivs[field].classList.contains('x')) {
    cellDivs[secondField].classList.add('o');
}
*/