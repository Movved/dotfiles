import '../styles/card.css'

function Card(){

    const startFct= ()=>{
        
    };

    return(
        
        <>
            <div className=' relative bg-[#B33791] w-80 h-100 rounded-md flex justify-center '>
                <div id='Affich' className='mt-30'>
                    <p id='timer' className='text-sky-800 text-6xl text-center mb-25 border border-solid border-black rounded-full'>25:00</p>
                    <div class="w-full max-w-sm min-w-[200px]">
                        <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="minites.." />
                    </div>
                </div>
                <div className='absolute bottom-[10px]' >
                    <button id="startBtn" onClick={startFct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Start</button>
                    <button id="stopBtn" className="m-5 bg-[#521C0D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Stop</button>
                    <button id="ReplayBtn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Replay</button>
                </div>
            </div>
        </>
    )
}
export default Card;