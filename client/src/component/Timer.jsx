import React from 'react'
import { useState, useEffect, useRef} from 'react';

export default function Timer(props){
    const {initialMinute = 0,initialSeconds = 0, counting} = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] =  useState(initialSeconds);
    
    useEffect(()=>{
        if(counting){
            let myInterval = setInterval(() => {
                    if (seconds > 0) {
                        setSeconds(seconds - 1);
                    }
                    if (seconds === 0) {
                        if (minutes === 0) {
                            clearInterval(myInterval)
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

    return (
        <h1 className='text-center clock'> {minutes < 10 ?  `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    )
}
