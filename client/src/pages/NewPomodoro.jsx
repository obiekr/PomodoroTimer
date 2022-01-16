import React, { useState } from 'react'
import Visualizer from '../component/Visualizer'
import "./NewPomodoro.css"
import { Link } from "react-router-dom";

export default function NewPomodoro(){
    const [pomo, setPomo] = useState(1)
    const [short, setShort] = useState(1)
    const [long, setLong] = useState(1)
    const [interval, setInterval] = useState(1)
    const [rep, setRep] = useState(1)

    function submitHandler(e){
        e.preventDefault()
        let local = [pomo, short, long, interval, rep]
        
        return (<Link to={{
            pathname: "/timer",
            state: local
        }}/>)
    }
    localStorage.removeItem("minutes")
    localStorage.removeItem("seconds")
    return(
        <div className="container-fluid">
            
            <h1 className='text-center mt-4 mb-4'>Create a new Pomodoro</h1>
            <form onSubmit={submitHandler}>
            <div className="d-flex justify-content-center">
                <div className="" >
                    <div className="form-group mt-1 np-form-group mx-auto">
                        <h3 className="text-center pomo">Pomo Time</h3> 
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={pomo} min={1} onChange={(e)=>setPomo(e.target.value)}/>
                        <p className="text-center my-2">Time to focus on your task</p>
                    </div>

                    <div className="form-group mt-5 np-form-group mx-auto">
                        <h3 className="text-center short">Short Break Time</h3>
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={short} min={1} onChange={(e)=>setShort(e.target.value)}/>
                        <p className="text-center mt-2">Occured after doing your task</p>
                    </div>

                    <div className="form-group mt-5 np-form-group mx-auto">
                        <h3 className="text-center long">Long Break Time</h3>
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={long} min={short==="minutes" ? 0 : short} onChange={(e)=>setLong(e.target.value)}/>
                        <p className="text-center mt-2">Occured after doing your task for "Interval" time</p>
                    </div>

                    <div className="form-group mt-4 np-form-group mx-auto">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="text-center interval">Interval</h3>
                                <input type="number" className="form-control text-center rounded-1" value={interval} min={1} onChange={(e)=>setInterval(e.target.value)}/>
                            </div>
                            <div className="col-6">
                                <h3 className="text-center rep">Repetition</h3>
                                <input type="number" className="form-control text-center rounded-1" value={rep} min={1} onChange={(e)=>setRep(e.target.value)}/>
                            </div>
                        </div>
                    </div>  
                </div>

            </div>
            <Visualizer pomo={pomo} short={short} long={long} interval={interval} rep={rep}/>
            <div className="text-center my-5 mx-auto" style={{"maxWidth":"260px"}}>
                {/* <button type="submit" className="btn btn-primary rounded-pill w-100">Save & Start Pomodoro</button> */}
                <Link 
                    className="btn btn-primary rounded-pill w-100" 
                    to="/timer"
                    state={{"pomo": pomo, "short": short, "long": long, "interval": interval, "rep":rep}}
                > Save & Start Pomodoro </Link>
            </div>
            </form>
        </div>
    )
}