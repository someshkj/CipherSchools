let seconds = 00;
let minutes = 00;

let addSec = document.getElementById("seconds");
let addMin = document.getElementById("minutes");

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let interval;

start.onclick=function(){
    clearInterval(interval);
    interval= setInterval(startTimer,1000);
    }

stop.onclick=function(){
    clearInterval(interval);
}

reset.onclick=function(){
    clearInterval(interval);
    seconds=00;
    minutes=00;
    addSec.innerHTML="0"+seconds;
    addMin.innerHTML="0"+minutes;

}

function startTimer(){
    seconds++;
    
    if(seconds<=9)
    {
        addSec.innerHTML="0"+seconds;
    }
    if(seconds>9)
    {
        addSec.innerHTML=seconds;
    }

    if(seconds>59)
    {
        minutes++;
        addMin.innerHTML="0"+minutes;
        seconds=00;
        addSec.innerHTML="0"+0;
    }
    if (minutes > 9) 
    {
        addMin.innerHTML = minutes;
    }

}

