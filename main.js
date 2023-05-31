let container = document.querySelector('.container');

createGrid ();

let boxes = document.querySelectorAll('.box');
let symbol = "O"

let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function createGrid (){
    let text = "";
    for (let i = 0; i < 9; i++){
        text += '<div class=box></div>';
    }
    container.innerHTML = text;
}

boxes.forEach(el => el.addEventListener('click', insertSymbol));

function insertSymbol (){
    if (symbol === "X"){
        symbol = "O"
    }else {
        symbol = "X"
    }
    this.innerHTML = symbol;
    this.removeEventListener('click', insertSymbol);
    checkWins();
}

function checkWins (){
    lines.forEach(line =>{
        let box1 = boxes[line[0]];
        let box2 = boxes[line[1]];
        let box3 = boxes[line[2]];

    

        if (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box1.innerHTML !== ""){
            box1.style.background = "red";
            box2.style.background = "red";
            box3.style.background = "red";
            boxes.forEach(box => box.removeEventListener('click', insertSymbol));
        }
    })
}