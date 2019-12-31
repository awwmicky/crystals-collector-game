$(() => {
console.log('——————');

let randImgCrystal;
let randNumCrystal;
let randNumTarget;

let arrImgCrystal = [];
let arrNumCrystal = [];

let winPoint = 0;
let lossPoint = 0;
let finalScore = 0;

const $win = $('.win');
const $loss = $('.loss');
const $scoreNum = $('.score-number');
const $playerScore = $('.player-score');

const $btns = $('.btn');
const $imgs = $('.crystal');


let imgArr = [
    './assets/IMG/LOZ-8bit-rupee-blue.png',
    './assets/IMG/LOZ-8bit-rupee-gold.png',
    './assets/IMG/LOZ-8bit-rupee-green.png',
    './assets/IMG/LOZ-8bit-rupee-orange.png',
    './assets/IMG/LOZ-8bit-rupee-purple.png',
    './assets/IMG/LOZ-8bit-rupee-red.png',
    './assets/IMG/LOZ-8bit-rupee-silver.png'
];
// console.log(imgArr);


const randValue = {
    numTarget: () => {
        randNumTarget = Math.floor(Math.random() * (120 - 19)) + 19;
        // console.log(randNumTarget); // range 19-120
        return randNumTarget;
    },
    numCrystal: () => {
        randNumCrystal = [];
        for (let i = 0; i < 4; i++) {
            let randNum = Math.floor(Math.random() * 12) + 1; 
            // console.log(randNum); // range 1-12
            
            randNumCrystal.indexOf(randNum) === -1 ? 
            randNumCrystal.push(randNum) : i--;
        }
        return randNumCrystal;
    },
    imgCrystal: () => {
        randImgCrystal = [];
        for (let i = 0; i < 4; i++) {
            let randImg = imgArr[
                Math.floor(Math.random() * imgArr.length)
            ]; 
            // console.log(randImg); // range 1-7
            
            randImgCrystal.indexOf(randImg) === -1 ? 
            randImgCrystal.push(randImg) : i--;
        }
        return randImgCrystal;
    }
};


function startGame() {    
    randValue.numTarget();
    $scoreNum.text(randNumTarget);
    
    arrNumCrystal = randValue.numCrystal();
    $btns.each( function (idx,el) {
        $(this).attr('data-value', arrNumCrystal[idx]);
    });

    arrImgCrystal = randValue.imgCrystal();
    $imgs.each( function (idx,el) {
        $(this).attr('src', arrImgCrystal[idx]);
    });

    console.log('Target No. : ', randNumTarget);
    console.log( 'Crystal No. : ', arrNumCrystal.join(' ⸎ '));
}
startGame();

function reset() {
    $playerScore.text(0);
    finalScore = 0;
    startGame();
}

function scoreBoard() {
    if (randNumTarget === finalScore) {
        console.log('WIN');
        $win.text(++winPoint);
        reset();
    } else if (finalScore > randNumTarget) {
        console.log('LOSS');
        $loss.text(++lossPoint);
        reset();
    }
}

$(document).on('click', '.btn', function (e) {
    finalScore += parseInt( $(this).attr('data-value') );
    $playerScore.text(finalScore);
    console.log( finalScore, $(this).attr('data-value') );
    scoreBoard();
        // console.table($(this).val()); // e.target
});

console.log('——————');
});