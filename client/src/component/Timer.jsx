import React from 'react'
import { useEffect, useRef, useState } from 'react';
import tone from "./alarm.mp3"

function switches(counter, data){
    if (counter % 2 === 0){
        console.log("pomo")
        return data.pomo
    }else if(counter % 2 === 1 && (counter + 1) % (data.interval*2) === 0){    
        console.log("long break")
        return data.long
    }else{
        console.log("short break")
        return data.short
    }
}



export default function Timer(props){
    const { counting, data, setType,
        minutes, setMinutes, 
        seconds, setSeconds, 
        counter, setCounter } = props;
    
    const [audio] = useState(new Audio(tone));

    // https://thewebdev.info/2021/03/13/how-to-make-the-react-useeffect-hook-not-run-on-initial-render/
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
        
        useEffect(() => {
            if (didMount.current) {
            func();
            } else {
            didMount.current = true;
            }
        }, deps);
    };
    
    useEffect(()=>{
        if(counting){
            localStorage.setItem("minutes", minutes)
            localStorage.setItem("seconds", seconds)
            let myInterval = setInterval(() => {
                    if (seconds > 0) {
                        setSeconds(seconds - 1);
                    }
                    if (seconds === 0) {
                        if (minutes === 0) {
                            if(counter+1 === data.interval*2*data.rep && counter % 2 === 1){
                                console.log("End")
                                clearInterval(myInterval);
                                return
                            }

                            let tempCnt = counter + 1
                            setCounter(tempCnt)
                            clearInterval(myInterval)
                            audio.play()
                        } else {
                            setMinutes(minutes - 1);
                            setSeconds(59);
                        }
                    } 
                }, 1000)
            return ()=> {
                clearInterval(myInterval);
                };
        }
    });

    useDidMountEffect(() => {
        localStorage.setItem("counter", counter)
        let min = switches(counter, data, setType)
        console.log(counter, min)
        setMinutes(min)
      }, [counter]);


    return (   
        <div className="">
            <h1 className='text-center clock'>{minutes < 10 ?  `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        </div>
        
    )
}
