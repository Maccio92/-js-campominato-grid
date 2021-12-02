/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Dichiaro gli eventi del pulsante
let button = document.querySelector('.play');
button.addEventListener ('click', function () {
    let level = document.getElementById("diff");
    let active = document.querySelector(".screen");
    let container = document.querySelector(".field");
    let row;
    let col;

    switch (level.value) {
        case 'easy':
                container.innerHTML = "";
                active.classList.add("show");
                row = 10;
                col = 10;
            createSquare(row, col);
            break;
            case 'medium':
                container.innerHTML = "";
                active.classList.add("show");
                row = 9;
                col = 9;
                createSquare(row, col);
                break;
            case 'hard':
                container.innerHTML = "";
                active.classList.add("show");
                row = 7;
                col = 7;
                createSquare(row, col);
                break;
    }
//  Evento 1 Scelta livello Easy
    // if( level.value == 'easy'){
    //     container.innerHTML = "";
    //     active.classList.add("show");
    //     row = 10;
    //     col = 10;
    //     createSquare(row, col);
    //     // let numberSquareEasy = row * col;
    //     // // console.log(numbersEasy);
    //     // for (let i = 0; i < numberSquareEasy; i++) {
    //     //     let square = document.createElement('div');
    //     //     square.classList.add('square');
    //     //     square.style.width = `calc(100% / ${col})`;
    //     //     square.style.height = `calc(100% / ${row})`;
    //     //     // console.log(square.style);
    //     //     let numbersEasy = i + 1;
    //     //     square.append(numbersEasy);
    //     //     container.append(square);
    //     // }
    //     // Evento 2 Scelta livello Medium
    // } else if ( level.value == 'medium'){
    //     container.innerHTML = "";
    //     active.classList.add("show");
    //     row = 9;
    //     col = 9;
    //     createSquare(row, col);
    //     // let numberSquareMedium = row * col;
    //     // // console.log(numbersMedium);
    //     // for (let i = 0; i < numberSquareMedium; i++) {
    //     //     let square = document.createElement('div');
    //     //     square.classList.add('square');
    //     //     square.style.width = `calc(100% / ${col})`;
    //     //     square.style.height = `calc(100% / ${row})`;
    //     //     // console.log(square.style);
    //     //     let numbersMedium = i + 1;
    //     //     square.append(numbersMedium);
    //     //     container.append(square);
    //     // }
    //     // Evento 3 Scelta livello Hard
    // } else {
    //     container.innerHTML = "";
    //     active.classList.add("show");
    //     row = 7;
    //     col = 7;
    //     // let numberSquareHard = row * col;
    //     createSquare(row, col);
    //     // console.log(numbersHard);
    //     // for (let i = 0; i < numberSquareHard; i++) {
    //     //     let square = document.createElement('div');
    //     //     square.classList.add('square');
    //     //     square.style.width = `calc(100% / ${col})`;
    //     //     square.style.height = `calc(100% / ${row})`;
    //     //     // console.log(square.style);
    //     //     let numbersHard = i + 1;
    //     //     square.append(numbersHard);
    //     //     container.append(square);
        
    // }})
    // Funzione per creare le griglie
    function createSquare(row, col) {
        let container = document.querySelector(".field");
        let numberSquare = row * col;
        for (let i = 0; i < numberSquare; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            // console.log(square.style);
            let numbers = i + 1;
            square.append(numbers);
            container.append(square);

            // Aggiungere BG al clic
            square.addEventListener ('click', function () {
                this.classList.add ('bg-active');
            })}}
        
            })