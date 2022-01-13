import React, { useState } from 'react'
import Visualizer from '../component/Visualizer'

export default function NewPomodoro(){
    const [pomo, setPomo] = useState("minutes")
    const [short, setShort] = useState("minutes")
    const [long, setLong] = useState("minutes")
    const [interval, setInterval] = useState(1)
    const [rep, setRep] = useState(1)

    function submitHandler(e){

    }
    
    return(
        <div className="container-fluid">
            <div className="">
                <h1 className='text-center mt-5 mb-4'>Create a new Pomodoro</h1>
            </div>
            <div className="d-flex justify-content-center">
                <form className="w-75" onSubmit={submitHandler}>
                    <div className="form-group mt-1 np-form-group mx-auto">
                        <h3 className="text-center">Pomo Time</h3> 
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={pomo} min={1} onChange={(e)=>setPomo(e.target.value)}/>
                        <p className="text-center my-2">Time to focus on your task</p>
                    </div>
                    <div className="form-group mt-5 np-form-group mx-auto">
                        <h3 className="text-center">Short Break Time</h3>
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={short} min={1} onChange={(e)=>setShort(e.target.value)}/>
                        <p className="text-center mt-2">Occured after doing your task</p>
                    </div>
                    <div className="form-group mt-5 np-form-group mx-auto">
                        <h3 className="text-center">Long Break Time</h3>
                        <input type="number" className="form-control text-center rounded-1" placeholder="minutes" value={long} min={short==="minutes" ? 0 : short} onChange={(e)=>setLong(e.target.value)}/>
                        <p className="text-center mt-2">Occured after doing your task for "Interval" time</p>
                    </div>
                    <div className="form-group mt-4 np-form-group mx-auto">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="text-center">Interval</h3>
                                <input type="number" className="form-control text-center rounded-1" value={interval} min={1} onChange={(e)=>setInterval(e.target.value)}/>
                            </div>
                            <div className="col-6">
                                <h3 className="text-center">Repetition</h3>
                                <input type="number" className="form-control text-center rounded-1" value={rep} min={1} onChange={(e)=>setRep(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    
                    <Visualizer />
                    <div className="text-center my-5 mx-auto" style={{"maxWidth":"260px"}}>
                        <button type="submit" className="btn btn-primary rounded-pill w-100">Save & Start Pomodoro</button>
                    </div>
                </form>

            </div>
        </div>
    )
}