function dieRoll(){
    return Math.round(Math.random() * 11 + 1);

}

var bee = document.getElementById("dice-box");
bee.onclick = function(){
    console.log(dieRoll());
    document.getElementById("roll-box").innerHTML=dieRoll();
};