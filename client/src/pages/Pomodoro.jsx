import React, { useState, useEffect } from 'react';
import "./Pomodoro.css"
import Pause from '../component/Pause';
import Timer from '../component/Timer';
import { useLocation } from 'react-router-dom';


export default function Pomodoro() {

    const [counting, setCounting] = useState(true)
    const location = useLocation()
    const { pomo, short, long, interval, rep } = location.state
    const [minutes, setMinutes] = useState(pomo)
    console.log(pomo, short, long, interval, rep)
    
    useEffect(() => {
      if (localStorage.getItem("minutes")){
        setMinutes(localStorage.getItem("minutes"))
        setMinutes(localStorage.getItem("seconds"))
      }else{
        localStorage.setItem("minutes", pomo)
        localStorage.setItem("seconds", 0)
      }
    }, [])

    return (
      
        <div className='container-fluid p-0 m-0'>
          <div className="d-flex justify-content-center vh-100">
            <div className="my-auto">
              <Timer initialMinute={minutes} counting={counting}/>
              <div className="d-flex justify-content-center">
                <Pause counting={counting} setCounting={setCounting}/>
              </div>
              <div className="timebox mt-5 d-flex justify-content-center">
                <h3 className="text-center timeline mx-2">1 Hour</h3>
                <h3 className="text-center timeline mx-2 now break">30 minutes</h3>
                <h3 className="text-center timeline mx-2">1 Hour</h3>
              </div>
            </div>
          </div>
        </div>
    )
}

