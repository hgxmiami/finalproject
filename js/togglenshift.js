var box = document.getElementById("anim-box");
box.onclick = function(){
    if (box.src.includes("open") ){
        box.src = "img/closed.png";
        document.getElementById("clown-voice").innerHTML = "";
    }
    else {
        box.src = "img/open.png";
        var elem = document.getElementById("clown-voice");
        elem.innerHTML = "cackle cackle";
    }
};