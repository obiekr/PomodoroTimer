import React from 'react'
import { useEffect } from 'react';

// interval = 3
function switches(counter, data, setType){
    if (counter % 2 === 0){
        console.log("pomo")
        setType("pomo")
        return data.pomo
    }else if(counter % 2 === 1 && (counter + 1) % (data.interval*2) === 0){
        if(counter+1 === data.interval*2*data.rep){
            console.log("End")
            return 0
        }        
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
        // PLEASE REVIEW THIS FUNCTION AGAIN
        // if(minutes === 0 && seconds === 0){
        //     localStorage.setItem("minutes", 0)
        //     localStorage.setItem("seconds", 0)
        //     return
        // }
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

    useEffect(()=>{
        console.log(counter)
        let min = switches(counter, data, setType)
        setMinutes(min)
    }, [counter])

    return (    
        <h1 className='text-center clock'>{minutes < 10 ?  `0${minutes}` : minutes} : {seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    )
}
