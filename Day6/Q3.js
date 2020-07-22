let name=prompt("ENTER YOUR NAME.")
var msg="WELCOME " + name ;
document.getElementById("demo").innerHTML=msg;
function FUN(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const ctime=document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);