import React from 'react'
import { useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';

// interval = 3
function switches(counter, interval, data, setType){
    if (counter % 2 === 0){
        console.log("pomo")
        setType("pomo")
        return data.pomo
    }else if(counter % 2 === 1 && (counter + 1) % (interval*2) === 0){
        console.log("long break")
        setType("long")
        return data.long
    }else{
        console.log("short break")
        setType("short")
        return data.short
    }
}



export default function Timer(props){
    const { counting, data, setType,
        minutes, setMinutes, 
        seconds, setSeconds, 
        counter, setCounter } = props;
    
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
                            let tempCnt = counter + 1
                            setCounter(tempCnt)
                            console.log(counter)
                            let min = switches(counter, data.interval, data, setType)
                            setMinutes(min)
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
        <h1 className='text-center clock'>{minutes < 10 ?  `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    )
}
