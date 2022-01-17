import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Pomodoro.css"
import Pause from '../component/Pause';
import Timer from '../component/Timer';
import Timeline from '../component/Timeline';


export default function Pomodoro() {
    const [counting, setCounting] = useState(true)
    const [counter, setCounter]  = useState(0)
    const [type, setType]  = useState("pomo")
    const location = useLocation()
    const data = location.state
    
    if (!localStorage.getItem("minutes")){
        console.log("reset")

        localStorage.setItem("minutes", data.pomo)
        localStorage.setItem("seconds", 0)
        // localStorage.setItem("minutes", 0)
        // localStorage.setItem("seconds", data.pomo)
    }


    const [minutes, setMinutes] = useState(localStorage.getItem("minutes")?parseInt(localStorage.getItem("minutes")):data.pomo);
    const [seconds, setSeconds] = useState(localStorage.getItem("seconds")?parseInt(localStorage.getItem("seconds")):0)

    return (
        <div className='container-fluid p-0 m-0'>
          <div className="d-flex justify-content-center vh-100">
            <div className="my-auto">
              <Timer 
                counting={counting} data={data} setType={setType}
                minutes={minutes} setMinutes={setMinutes} 
                seconds={seconds} setSeconds={setSeconds}
                counter={counter} setCounter={setCounter} 
                />
              <div className="d-flex justify-content-center">
                <Pause counting={counting} setCounting={setCounting}/>
              </div>
              <div className="timebox mt-5 d-flex justify-content-center">
                {/* <Timeline data={data} counter={counter}/> */}
              </div>
            </div>
          </div>
        </div>
    )
}

