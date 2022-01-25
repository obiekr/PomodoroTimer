import React, { useState } from 'react'
import "./Visualizer.css"
export default function Timeline({data, counter}){
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
    // console.log(arr)
    // console.log(counter, arr.length)
    return(
        <div className="d-flex justify-content-center mt-5">
                <div className={`my-auto my-border p-2 m-2 ${arr[counter-1]} ${counter===0?"transparent": ""} `}>
                    <h6 className={`text-center my-auto ${arr[counter-1]}`}>{data[arr[counter-1]]} minute</h6>
                </div>
                <div className={`my-auto my-border p-2 m-2 ${arr[counter]}`}>
                    <h6 className={`text-center my-auto ${arr[counter]}`}>{data[arr[counter]]} minute</h6>
                </div>
                <div className={`my-auto my-border p-2 m-2 ${arr[counter+1]} ${counter===arr.length-1?"transparent": ""}`}>
                    <h6 className={`text-center my-auto ${arr[counter+1]}`}>{data[arr[counter+1]]} minute</h6>
                </div>
                
        </div>
    )
}