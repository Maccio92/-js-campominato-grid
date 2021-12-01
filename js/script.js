/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Creo Campo Easy
let row = 10;
let col = 10;
let fieldEasy = document.querySelector('.field');
let numberSquareEasy = row * col;
let numbersEasy = [];
for (let i=1;i<=100;i++) {
  numbersEasy.push(i);
}
// console.log(numbersEasy);
for (let i = 0; i < numberSquareEasy; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${col})`;
    square.style.height = `calc(100% / ${row})`;
    // console.log(square.style);
    square.append(numbersEasy[i]);
    fieldEasy.append(square);
}

// Creo Campo Medium
let rowM = 9;
let colM = 9;
let fieldMedium = document.querySelector('.field');
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

// Creo Campo Hard
let rowH = 7;
let colH = 7;
let fieldHard = document.querySelector('.field');
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


