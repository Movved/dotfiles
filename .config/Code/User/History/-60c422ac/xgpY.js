
let pauseBtn = document.getElementById("pause");
let replayBtn = document.getElementById("replay");



let playBtn = document.getElementById("play");





let timer = document.getElementById("time");
const play = (min,sec)=>{    
    //diminution
        if(min === 0 && sec === 0){
            timer.innerHTML = '00:00'
            return;
        }
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
    timer.innerHTML = `${formattedMin}:${formattedSec}`;

        const repeate = setTimeout(play,1000);
    }

function pomodoro(){
    let min = parseInt(document.getElementById("user-time").value);
    let sec = 0;   
    play(min,sec);
}
const pause = ()=>{
    
}
const replay = ()=>{
    
}