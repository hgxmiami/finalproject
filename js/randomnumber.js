<script>
//* Write a card picking function that outputs cards from a standard deck:
//* -ex- 'Ace of Clubs', 'Queen of Hearts', '10 of Diamonds', '8 of Clovers',
//* There are 4 suits: Hearts, Diamonds, Clubs, Clovers
//* There are 13 cards for each suit: Ace, 2-10, King, Queen, Jack
//* steps: generate a random number between 1-4 for suit set the value of a 
//* string variable depending on that 1-4 number generate a random number between
//* 1-13 for the card's number put the number and the suit string together
//* and return it.


function poker1(){
    
    var suit = Math.round(Math.random() * 3);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";
    var nugget = Math.round(Math.random() * 12 + 1);
    if (nugget === 1) nugget = "Ace";

    return nugget + " of " + suit;

        

}



function dieRoll(){
    return Math.round(Math.random() * 5 + 1);
//rolls a single die, returns a number between 1 and 6

}
function diceRoll(numDice){
//rolls as many dice as numDice says, returns an array with the rolls    
    var lamar = [];
    //for loop
    for (var i = 0; i < numDice; i++){
    lamar.push(dieRoll());
}
return lamar;

}
// swap the first and last elements of the input array then return
function swapEnds(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length -1]
    arr[arr.length -1] = temp;
    return arr;
}