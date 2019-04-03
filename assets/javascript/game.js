//declare variables
let randomNumber = 0;
let wins = 0;
let losses = 0;
let counter = 0;
// let tile1 = 0;
// let tile2 = 0;
// let tile3 = 0;
// let tile4 = 0;
let values = [];



//Document Ready

$(document).ready(function () {
    //Generate a GOAL radom Number between 19 and 120
   
    

    //Generate randomGeorge for Each Tile Between 1 and 12 
    reset();
    console.log(randomNumber)
    console.log(values)
    
    // console.log(tile1, tile2, tile3, tile4);


 
    //Click Tile
    //random number click
    $("button").on("click", function (value) {
        
            //each button click increases counter
            var inc = parseInt($(this).attr('value')); 
            counter += inc;
            console.log(counter)
            //win
            //IF Score = Random Number = Win
    
            if (randomNumber == counter){
            wins ++;
            console.log("win: ", wins)
            //Reset 
            reset();
            
        } else if (counter > randomNumber){
            losses ++
            reset();
            console.log("losses: ", losses)
        }
             

        



        
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




function reset() {
    counter = 0;
    genNum();



}
