//declare variables
let randomNumber = 0;
let wins = 0;
let losses = 0;
let counter = 0;
let values = [];



//Document Ready

$(document).ready(function () {
    //Generate a GOAL radom Number between 19 and 120

    reset();

    //Click Tile
    
    $("button").on("click", function (value) {
        console.log("button",this.value)
        
        //each button click increases counter with the value of the of the tile
        var inc = parseInt($(this).attr('value')); 
        counter += inc;
        //show the counter in the window
        $(".count").text(counter)
      
      
        //IF counter score = Random Number = Win
        if (randomNumber == counter){
        //increase the number of wins    
        wins ++;
        //add 1 to the total number of wins in the window
        $(".wins").text(wins);
        //Reset 
        reset();
 
        //else if counter Score > RANDOM NUMBER = Lose    
        } else if (counter > randomNumber){
            //increase the losses
            losses ++;
            //add 1 to total number of losses in the window
            $(".losses").text(losses);
            //reset the tiles and numbers
            reset();
            
        }
        
    });  
    
});
//Generate randomGeorge for Each Tile Between 1 and 12  
function genNum() {
    let randGen = Math.ceil(Math.random() * 120 + 19);
    randomNumber = randGen;
    $(".random").html(randomNumber);
    
  

}
 //Generate randomGeorge for Each Tile Between 1 and 12 
function tilNum(){
   while (values.length <= 4){
        let tileGen = Math.floor(Math.random() * 12) + 1;
        if(values.indexOf(tileGen) === -1) values.push(tileGen);{

    $(".btn1").val(values[0]);
    $(".btn2").val(values[1]);
    $(".btn3").val(values[2]);
    $(".btn4").val(values[3]);
   
    }
}
}
//reset the counter, the goal random number, and the values of each tile
function reset() {
    values = [];
    counter = 0;
    genNum();
    tilNum();

}
