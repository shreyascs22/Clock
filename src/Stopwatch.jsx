import { useState, useEffect } from "react";
function Stopwatch(){
    const [time,setTime] = useState(0);
    const [isActive,setisActive] = useState(false);
    useEffect(() => {
        let intervalid;
        if(isActive){
            intervalid = setInterval(() => {setTime((prevTime) => prevTime + 1);}, 10);
        }
        return ()=>clearInterval(intervalid);
    },[isActive,time])
    const milliseconds = time%100;
    const seconds = Math.floor((time%6000)/100);
    const minutes = Math.floor((time%360000)/6000);
    const hours = Math.floor(time/360000);
    const startstop = ()=>{
        setisActive(!isActive);
    };
    const reset = ()=>{
        setTime(0);
        setisActive(false);
    };
    return(
        <div className = "text-2xl flex justify-center items-center h-screen w-screen bg-black text-white">
            <div className="border-2 border-white rounded-xl p-5 w-fit h-fit">
                <h1 className="text-center bg-gradient-to-r from-red-300 to-purple-400 font-bold text-transparent bg-clip-text ">{hours.toString().padStart(2,'0')}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}:{milliseconds.toString().padStart(2,'0')}</h1>
                <div className = "flex">
                    <div className="p-2">
                        <button onClick={startstop} className="p-2 border-white border-2 rounded-xl bg-slate-800 hover:bg-gray-900">
                            {isActive ? "STOP":"START"}
                        </button>
                    </div>
                    <div className="p-2">
                        <button onClick={reset} className=" p-2 border-white border-2 rounded-xl bg-slate-800 hover:bg-gray-900">
                            RESET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Stopwatch