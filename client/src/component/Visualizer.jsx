import React, { useState } from 'react'
import "./Visualizer.css"

export default function Visualizer(props){
    const { pomo, short, long, interval, rep } = props
    return(
        <>
        <div className="container-fluid  p-0 mx-0 mt-4">
            <div className="d-flex justify-content-center visualizer-col">
                <div className="text-center p-2 my-3 mx-1 rounded-3 visualizer-box-pomo visualizer-box">
                    {pomo} minutes
                </div>
                <div className="text-center py-2 px-1 my-3 mx-1 rounded-3 visualizer-box-short visualizer-box">
                    {short} minutes
                </div>
                <div className="text-center p-2 my-3 mx-1 rounded-3 visualizer-box-long visualizer-box">
                    x {interval}
                </div>
                <div className="text-center py-2 px-4 my-3 mx-1 rounded-3 visualizer-box-interval visualizer-box">
                    {long} minutes
                </div>
            </div>
            <div className="">
                <div className="text-center p-2 my-1 mx-auto rounded-3 visualizer-box-rep visualizer-box">
                    x {rep}
                </div>
            </div>
        </div>
        </>
    )
}