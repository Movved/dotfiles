
let pauseBtn = document.getElementById("pause");
let replayBtn = document.getElementById("replay");



let playBtn = document.getElementById("play");
playBtn.addEventListener("click",pomodoro);




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
        if(sec > 10 && min < 10 )
            timer.innerHTML = '0'+min+':'+sec;
        if(sec > 10 && min > 10 )
            timer.innerHTML = min+':'+sec;
        if(sec < 10 && min > 10 )
            timer.innerHTML = min+':0'+sec;
        if(sec < 10 && min < 10 )
            timer.innerHTML = '0'+min+':0'+sec;
        
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