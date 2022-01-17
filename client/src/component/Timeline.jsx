import React, { useState } from 'react'
import "./Visualizer.css"
export default function Timeline({type}){

    var className = type


    return(
        <div className="d-flex justify-content-center">
                <div className="my-auto my-border p-2 m-2 side">
                    <h6 className='text-center my-auto side'>1 minute</h6>
                </div>
                <div className="my-auto pomo my-border p-2 m-2">
                    <h6 className='text-center my-auto'>1 minute</h6>
                </div>
                <div className="my-auto short my-border p-2 m-2 visualizer-box-short">
                    <h6 className='text-center my-auto nows visualizer-box-short'>1 minute</h6>  
                </div>
                <div className="my-auto long my-border p-2 m-2">
                    <h6 className='text-center my-auto '>1 minute</h6>
                </div>
                <div className="my-auto long my-border p-2 m-2">
                    <h6 className='text-center my-auto '>1 minute</h6>
                </div>
        </div>
    )
}