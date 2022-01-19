import React, { useState } from 'react'
import "./Visualizer.css"
export default function Timeline({data, counter}){
    // {pomo: 1, short: '2', long: '3', interval: '2', rep: '3'}
    var clas = ""
    var arr = []
    for(let i=0; i < data.rep; i++){
        for(let j=0; j < data.interval; j++){
            clas += "pomo "
            arr.push("pomo")
            clas += "short "
            arr.push("short")
        }
        clas += "long "
        arr.push("long")
    }
    console.log(clas)
    

    return(
        <div className="d-flex justify-content-center">
                <div className="my-auto pomo my-border p-2 m-2">
                    <h6 className={`text-center my-auto ${arr[counter]}`}>1 minute</h6>
                </div>
                <div className="my-auto short my-border p-2 m-2 visualizer-box-short">
                    <h6 className='text-center my-auto nows visualizer-box-short'>1 minute</h6>  
                </div>
                <div className="my-auto long my-border p-2 m-2">
                    <h6 className='text-center my-auto '>1 minute</h6>
                </div>
                
        </div>
    )
}