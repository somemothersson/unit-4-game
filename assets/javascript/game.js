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
   
    

    //Generate randomGeorge for Each Tile Between 1 and 12 
    genNum();
    console.log(randomNumber)
    console.log(values)
    
    // console.log(tile1, tile2, tile3, tile4);


 
    //Click Tile
    $("button").on("click", function () {
        console.log("click", this.value);
        while (counter < randomNumber){
            if ()



        }
       

        


        //if clicked add value to counter
    });    

    

//If Score >RANDOM NUMBER = Lose
    //RESET
//IF Score = Random Number = Win
    //Reset 


});
//Generate randomGeorge for Each Tile Between 1 and 12  
function genNum() {
    let randGen = Math.ceil(Math.random() * 120 + 19);
    randomNumber = randGen;
    while(values.length < 4){
        let tileGen = Math.floor(Math.random() * 12) + 1;
        if(values.indexOf(tileGen) === -1) values.push(tileGen);


    }
    $(".btn1").val(values[0]);
    $(".btn2").val(values[1]);
    $(".btn3").val(values[2]);
    $(".btn4").val(values[3]);
   
  

}
function tileAppend() {
    $(".btn1").val(values[0]);
    console.log()


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