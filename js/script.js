/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

let fieldEasy = document.querySelector('.field');
let fieldMedium = document.querySelector('.field');
let fieldHard = document.querySelector('.field');
    

let button = document.querySelector('.play');
button.addEventListener ('click', function () {
    let level = document.getElementById("diff");
    let active = document.querySelector(".active");
    let container = document.querySelector(".field");

    if( level.value == 'easy'){
        container.innerHTML = "";
        active.classList.add("show");
        let row = 10;
        let col = 10;
        let numberSquareEasy = row * col;
        let numbersEasy = [];
         for (let i = 1; i <= numberSquareEasy; i++) {
        numbersEasy.push(i);
        }
        for (let i = 0; i < numberSquareEasy; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        // console.log(square.style);
        square.append(numbersEasy[i]);
        fieldEasy.append(square);
        }
    } else if ( level.value == 'medium'){
        container.innerHTML = "";
        active.classList.add("show");
        let rowM = 9;
        let colM = 9;
        let numberSquareMedium = rowM * colM;
        let numbersMedium = [];
        for (let i = 1; i <= numberSquareMedium; i++) {
             numbersMedium.push(i);
        }
    // console.log(numbersEasy);
        for (let i = 0; i < numberSquareMedium; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colM})`;
            square.style.height = `calc(100% / ${rowM})`;
            // console.log(square.style);
            square.append(numbersMedium[i]);
            fieldMedium.append(square);
    }
    } else {
        container.innerHTML = "";
        active.classList.add("show");
        let rowH = 7;
        let colH = 7;
        let numberSquareHard = rowH * colH;
        let numbersHard = [];
        for (let i = 1; i <= numberSquareHard ; i++) {
        numbersHard.push(i);    
    }
    // console.log(numbersEasy);
        for (let i = 0; i < numberSquareHard; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colH})`;
            square.style.height = `calc(100% / ${rowH})`;
            // console.log(square.style);
            square.append(numbersHard[i]);
            fieldHard.append(square);
    }
    }
})