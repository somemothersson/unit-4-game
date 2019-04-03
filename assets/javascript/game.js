//declare variables
let randomNumber = 0;
let wins = 0;
let losses = 0;
let counter = 0;
let tileOne = 0;
let tileTwo = 0;
let tileThree = 0;
let tileFour = 0;


//Create an Object to store numbers for each tile
// let tiles = {
//     gcOne: 0,
//     gcTwo: 0,
//     gcThree: 0,
//     gcFour: 0,

// }

//Document Ready

$(document).ready(function () {
    //Generate a GOAL radom Number between 19 and 120
    let randGen = Math.ceil(Math.random() * 120 + 19);
    tileAppend();   
    console.log(randGen)
    //Click Tile to add value to Score
    $(".btn1, .btn2, .btn3, .btn4").on("click", function () {
        console.log("click", this.value);

        //if clicked add value to counter
    });    

    


    // $("#img").ready("on click" function)
//If Score >RANDOM NUMBER = Lose
    //RESET
//IF Score = Random Number = Win
    //Reset


});
//Generate randomGeorge for Each Tile Between 1 and 12  
function tileAppend() {
    let tileGen = Math.ceil(Math.random() * 12 + 1);
    console.log(tileGen);

    $(".btn1, .btn2, .btn3, .btn4").val(tileGen);

  

}

function reset() {
    let counter = 0;
    $("#button").val(tileGen);



}