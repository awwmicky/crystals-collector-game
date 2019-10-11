/* 
= Bugs/Issue =
- each button contains different number
*/
/*
= Bonus =
- increase background gradient
    - if warmer, color
    - else if lose, animation
*/

/* -------------------------------------------------------------------------- */

$(() => {

let randNumTarget;
let randNumCrystal;

let winPoint = 0;
let lossPoint = 0;
let finalScore = 0;

const $win = $('.win');
const $loss = $('.loss');
const $scoreNum = $('.score-number');
const $playerScore = $('.player-score');

const $btn = $('.btn');
const $btn1 = $('.btn-1');
const $btn2 = $('.btn-2');
const $btn3 = $('.btn-3');
const $btn4 = $('.btn-4');



function startGame() {
    randNumTarget = Math.floor(Math.random() * (120 - 19)) + 19;
    $btn.each( function() {
        $(this).attr('value', numGenCrystal());
    });    
    function numGenCrystal() {
        let randNumCrystal = Math.floor(Math.random() * 12) + 1;
        return randNumCrystal;
    }
    
    console.log('Target No. : ', randNumTarget);
    console.log(
        'Crystal No. : ',
        [$btn1.val(),
        $btn2.val(),
        $btn3.val(),
        $btn4.val()]
        .join(' ⸎ ')
    );

    $scoreNum.text(randNumTarget);
    $playerScore.text(0);
}
startGame();

function reset() {
    finalScore = 0;
    startGame();
}

function scoreBoard() {
    if (randNumTarget === finalScore) {
        console.log('YES');
        $win.text(++winPoint);
        reset();
    } else if (finalScore > randNumTarget) {
        console.log('NO');
        $loss.text(++lossPoint);
        reset();
    }
}

$(document).on('click', '.btn', function (e) {
    finalScore += parseInt($(this).val());
    $playerScore.text(finalScore);
    console.log(finalScore);
    scoreBoard();
    // console.table($(this).val()); // e.target
});

console.log('——————');
});