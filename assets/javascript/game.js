//declare variables
let randomNumber = 0;
let wins = 0;
let losses = 0;
let counter = 0;
let tile1 = 0;
let tile2 = 0;
let tile3 = 0;
let tile4 = 0;
let values = [];



//Document Ready

$(document).ready(function () {
    //Generate a GOAL radom Number between 19 and 120
    let randGen = Math.ceil(Math.random() * 120 + 19);
    randomNumber = randGen;
    console.log(randomNumber)

    //Generate randomGeorge for Each Tile Between 1 and 12 
    tileAppend();
    
    // console.log(tile1, tile2, tile3, tile4);
    console.log(values)
    
 
    //Click Tile
    $(".btn1, .btn2, .btn3, .btn4").on("click", function () {
        console.log("click", this.value);
        // while (counter < randomNumber){
        counter + this.value;
        console.log("counter", counter)

        // }


        //if clicked add value to counter
    });    

    

//If Score >RANDOM NUMBER = Lose
    //RESET
//IF Score = Random Number = Win
    //Reset 


});
//Generate randomGeorge for Each Tile Between 1 and 12  
function tileAppend() {
    while(values.length < 4){
        let tileGen = Math.floor(Math.random() * 12) + 1;
        if(values.indexOf(tileGen) === -1) values.push(tileGen);

    // let tileGen1 = Math.ceil(Math.random() * 12 + 1);
    // tile1 = tileGen1;
    // $(".btn1").val(tileGen1);
    // let tileGen2 = Math.ceil(Math.random() * 12 + 1);
    // tile2 = tileGen2;
    // $(".btn2").val(tileGen2);
    // let tileGen3 = Math.ceil(Math.random() * 12 + 1);
    // tile3 = tileGen3;
    // $(".btn3").val(tileGen3);
    // let tileGen4 = Math.ceil(Math.random() * 12 + 1);
    // tile4 = tileGen4;
    // $(".btn4").val(tileGen4);
    // for (i = 0; i < 4; i++){
    //    let tileGen = Math.ceil(Math.random() * 12 + 1);
    //    values.push(tileGen);
    //    tile1 = values[i]
        // console.log(tileAppend)
    }
   
    
  
    

   
  

}

function reset() {
    let counter = 0;
    $("#button").val(tileGen);



}


// let tileVal = {
//     gc1: 0,
//     gc2: 0,
//     gc3: 0,
//     gc4: 0,

//     tileRand:function (){
//         this.gc1 = this.tileAppend;



//     }

// }