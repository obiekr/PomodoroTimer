import React, { useState } from 'react'
import "./Visualizer.css"
export default function Timeline({data, counter, setCounter, setMinutes, setSeconds}){
    // {pomo: 1, short: '2', long: '3', interval: '2', rep: '3'}
    var arr = []
    for(let i=0; i < data.rep; i++){
        for(let j=0; j < data.interval; j++){
            arr.push("pomo")
            if (j!==data.interval-1){
                arr.push("short")
            }
        }
        arr.push("long")
    }

    //tambahin fungsi ulangin timer klo klik visualizer
    // bikin ulang list diatas jadi dictionary
    function clickHandler(code, counter){
        if (code === 1){
            setCounter(counter-1)
            setSeconds(0)
        }
        else if (code === 2){
            setCounter(counter)
            setSeconds(0)
        }
        else if (code === 3){
            setCounter(counter+1)
            setSeconds(0)
        }
        // console.log(code, counter)
        // setCounter(counter-1)
        // console.log("c1", counter)

    }
    // console.log(arr)
    // console.log(counter, arr.length)
    return(
        <div className="d-flex justify-content-center mt-5">
                <div className={`my-auto my-border p-2 m-2 ${arr[counter-1]} ${counter===0?"transparent": ""} `} onClick={counter===0? ()=>{} : ()=>clickHandler(1, counter)}>
                    <h6 className={`text-center my-auto ${arr[counter-1]}`}>{data[arr[counter-1]]} minute</h6>
                </div>
                <div className={`my-auto my-border p-2 m-2 ${arr[counter]}`}
                     onClick={(e)=>clickHandler(2, counter)}>
                    <h6 className={`text-center my-auto now ${arr[counter]}`}>{data[arr[counter]]} minute</h6>
                </div>
                <div 
                className={`my-auto my-border p-2 m-2 ${arr[counter+1]} ${counter===arr.length-1?"transparent": ""}`}
                onClick={counter===arr.length-1? ()=>{} : ()=>clickHandler(3, counter)}>

                    <h6 className={`text-center my-auto ${arr[counter+1]}`}>{data[arr[counter+1]]} minute</h6>
                </div>
                
        </div>
    )
}