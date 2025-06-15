let playBtn = document.getElementById("play");
let timer = document.getElementById("time");
let timerId = null;
let isPause = false;
let currMin,currSec;
const play = (min,sec)=>{    
    //diminution
        if(min === 0 && sec === 0){
            timer.innerHTML = '00:00'
            playBtn.disabled = false;
            return;
        }
        currMin = min;
        currSec = sec;
        playBtn.disabled = true;
        if (sec === 0){
            min--;
            sec = 59;
        }
        else{
            sec--;
        }
    //affichage formatee :
    const formattedMin = min < 10 ? '0' + min : min;
    const formattedSec = sec < 10 ? '0' + sec : sec;
    timer.innerHTML = formattedMin +':'+formattedSec;
    //repeter toute seconde
     timerId = setTimeout(()=> play(min,sec),1000);
    }
function pomodoro(){
    if(isPause)
        play(currMin,currSec);
    else{
    let min = parseInt(document.getElementById("user-time").value);
    sec = 0;   
    play(min,sec);
    }
}
const pause = ()=>{
 clearTimeout(timerId);
 playBtn.disabled = false;
 isPause = true;
}
const replay = ()=>{
    clearTimeout(timerId);    
    timer.innerHTML= '00:00'
    playBtn.disabled = false;
    isPause = false;   
}