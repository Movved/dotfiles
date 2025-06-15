import '../styles/card.css'
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
function Card(){

    
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout( setCount((count) => count+1 ),1000)
    });


    return(
        
        <>
            <div className=' relative bg-[#B33791] w-80 h-100 rounded-md flex justify-center '>
                <div id='Affich' className='mt-30'>
                    <p id='ptimer' className='text-sky-800 text-6xl text-center mb-20 border border-solid border-white rounded-full'>
                        {count}</p>
                    <button id="playBtn"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">START</button>    
                {/*    <div class="w-full max-w-sm min-w-[200px]">
                        <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="minites.." />
                    </div>
                </div>
                <div className='absolute bottom-[10px]' >
                    <button id="playBtn" onClick={()=>setCount(count+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Start</button>
                    <button id="stopBtn" onClick={pause} className="m-5 bg-[#521C0D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Stop</button>
                    <button id="ReplayBtn" onClick={replay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Replay</button>*/}
                </div>
            </div>
        </>
    )
}
export default Card;