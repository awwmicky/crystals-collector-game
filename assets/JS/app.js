/* -------------------------------------------------------------------------- */

$(() => {

let randImgCrystal;
let randNumCrystal;
let randNumTarget;

let arrImgCrystal = [];
let arrNumCrystal = [];

let winPoint = 0;
let lossPoint = 0;
let finalScore = 0;

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

const $win = $('.win');
const $loss = $('.loss');
const $scoreNum = $('.score-number');
const $playerScore = $('.player-score');

const $btn = $('.btn');
const $img = $('.crystal');
const $btn1 = $('.btn-1');
const $btn2 = $('.btn-2');
const $btn3 = $('.btn-3');
const $btn4 = $('.btn-4');



const randNum = {
    imgCrystal: () => {
        randImgCrystal = imgArr[Math.floor(Math.random() * imgArr.length)];
        return randImgCrystal;
    },
    numCrystal: () => {
        randNumCrystal = Math.floor(Math.random() * 12) + 1;
        return randNumCrystal;
    },
    numTarget: () => {
        randNumTarget = Math.floor(Math.random() * (120 - 19)) + 19;
        return randNumTarget;
    }
};


function startGame() {    
    randNum.numTarget();
    
    $btn.each( function() {
        randNum.numCrystal();
        
        if ( !arrNumCrystal.includes(randNumCrystal) ) {
            arrNumCrystal.push(randNumCrystal);
            $(this).attr('data-value', randNumCrystal);
        } else {
            randNum.numCrystal();
            arrNumCrystal.push(randNumCrystal);
            $(this).attr('data-value', randNumCrystal);
        }
    });    
    
    $img.each( function() {
        randNum.imgCrystal();
        
        if ( !arrImgCrystal.includes(randImgCrystal) ) {
            arrImgCrystal.push(randImgCrystal);
            $(this).attr('src', randImgCrystal);
        } else {
            randNum.imgCrystal();
            arrImgCrystal.push(randImgCrystal);
            $(this).attr('src', randImgCrystal);
        }
    });
    
    console.log('Target No. : ', randNumTarget);
    console.log( 'Crystal No. : ', arrNumCrystal.join(' ⸎ '));    
    
    $scoreNum.text(randNumTarget);
}

startGame();

function reset() {
    arrImgCrystal = [];
    arrNumCrystal = [];
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
    finalScore += parseInt($(this).attr('data-value'));
    $playerScore.text(finalScore);
        console.log(finalScore);
    scoreBoard();
        // console.table($(this).val()); // e.target
});

console.log('——————');
});