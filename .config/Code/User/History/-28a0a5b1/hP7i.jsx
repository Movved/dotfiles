import '../styles/card.css'

function Card(){
    const timer = document.getElementById("ptimer");
    const playBtn = document.getElementById("playBtn");
    let timerId = null;
    let isPause = false;
    let currMin,currSec;
    let min,sec=0;
    const play= (min,sec)=>{
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
    

    return(
        
        <>
            <div className=' relative bg-[#B33791] w-80 h-100 rounded-md flex justify-center '>
                <div id='Affich' className='mt-30'>
                    <p id='ptimer' className='text-sky-800 text-6xl text-center mb-20 border border-solid border-white rounded-full'>25:00</p>
                    <div class="w-full max-w-sm min-w-[200px]">
                        <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="minites.." />
                    </div>
                </div>
                <div className='absolute bottom-[10px]' >
                    <button id="playBtn" onClick={pomodoro} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Start</button>
                    <button id="stopBtn" onClick={pause} className="m-5 bg-[#521C0D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Stop</button>
                    <button id="ReplayBtn" onClick={replay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Replay</button>
                </div>
            </div>
        </>
    )
}
export default Card;