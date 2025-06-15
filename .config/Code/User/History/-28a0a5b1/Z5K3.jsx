import '../styles/card.css'

function Card(){

    const startFct= ()=>{
        
    };

    return(
        
        <>
            <div className=' relative bg-[#B33791] w-80 h-100 rounded-md flex justify-center '>
                <div id='Affich' className='mt-30'>
                    <p id='timer' className='font-sky-600 text-center mb-25'>25:00</p>
                    <input type="number" name="time" id="time" placeholder='minutes'></input>
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