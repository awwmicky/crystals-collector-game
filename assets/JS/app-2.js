/* 
= Bugs/Issue =
- each button contains different number & crystal
    - lowered the chances of repeatability
*/
/*
= Bonus =
- crystal random animation
- set timeout for win/loss
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
const $img = $('.crystal');
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

/* 
const randNum = () => {
    randNumCrystal = Math.floor(Math.random() * 12) + 1;
    randNumTarget = Math.floor(Math.random() * (120 - 19)) + 19;
    return {
        numCrystal : randNumCrystal,
        numTarget : randNumTarget
    };
};
// console.dir(randNum);
*/

/* 
var imgFolder = "./assets/IMG/";
$.ajax({
    url : imgFolder,
    // dataType: 'json',
    success: function (data) {
        // console.log( $(data).find(".icon-image") );
        $(data).find(".icon-image").each( function() {
            let fileName = this.href.replace("http://" + window.location.host, "");
            // console.log(this.title);
            console.log(fileName);
        });

        // $(data).find("a").attr("href", function (i, val) {
            // if( val.match(/\.(jpe?g|png)$/) ) {
                // console.log(val);
                // $("body").append( "<img src='"+ val +"'>" );
            // } 
        // });
    }
});
*/

/* 
// let winPrompt = setInterval(winInterval, 500);
// function winInterval() {
    // if ( $('.winner').attr('class') === 'win-class' ) {
        $('.winner').css('display', 'inline-block');
        $('.winner').toggleClass('win-color');
    // } else {
        // $('.winner').css('display', 'none');
        // clearInterval(winInterval);
    // }
// }
// clearTimeout(winPrompt, 1100);
// let lossPrompt = ;
*/