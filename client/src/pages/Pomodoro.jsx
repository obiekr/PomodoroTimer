import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Pomodoro.css"
import Pause from '../component/Pause';
import Timer from '../component/Timer';
import Timeline from '../component/Timeline';


export default function Pomodoro() {
    const [counting, setCounting] = useState(true)
    const [counter, setCounter] = useState(localStorage.getItem("minutes")?parseInt(localStorage.getItem("counter")):0)
    const location = useLocation()
    const data = location.state
    
    if (!localStorage.getItem("minutes")){
        console.log("reset")

        localStorage.setItem("counter", 0)
        localStorage.setItem("minutes", data.pomo)
        localStorage.setItem("seconds", 0)

    }
    const [minutes, setMinutes] = useState(parseInt(localStorage.getItem("minutes")))
    const [seconds, setSeconds] = useState(parseInt(localStorage.getItem("seconds")))

    // let a = false
    // let ts1 = 0
    // document.body.addEventListener("keydown", (e)=>{
    //   let ts2 = new Date()/1000
    //   if (ts2-ts1 >= 2 & e.code === "Space" & !a){
    //     console.log(ts2-ts1 >= 1)
    //     ts1=ts2
    //     a=true
    //   }
    //   document.body.addEventListener('keyup', ()=>{
    //     a=false
    //   })
    // })

    // let ts1 = new Date()/1000
    // document.body.addEventListener("keydown", ()=>{
    //   let ts2 = new Date()/1000
    //   if (ts2-ts1 >= 2){
    //   console.log(ts2-ts1, ts2-ts1 >= 10)
    //     ts1=ts2
    //   }
    // })


    //   let a = false
    // document.body.addEventListener('keydown', (e)=>{
    //   if (e.code === "Space" & !a){
    //     // setCounting(!counting)
    //     console.log("pressed")
    //     a = true

    //   }
    //   document.body.addEventListener('keyup', ()=>{
    //     a=false
    //   })
    // })
    

    return (
        <div className='container-fluid p-0 m-0'>
          <div className="d-flex justify-content-center vh-100">
            <div className="my-auto">
              <div className={counter % 2 === 0 ? "text-center mb-5 break-font trans" : "text-center mb-5 break-font "}>
                <h2>Break</h2>
              </div>

              <Timer 
                counting={counting} data={data}
                minutes={minutes} setMinutes={setMinutes} 
                seconds={seconds} setSeconds={setSeconds}
                counter={counter} setCounter={setCounter} 
                />
              <div className="d-flex justify-content-center">
                <Pause counting={counting} setCounting={setCounting}/>
              </div>
              <div className="timebox mt-5 d-flex justify-content-center">
                <Timeline data={data} 
                counter={counter} setCounter={setCounter} 
                setMinutes={setMinutes} setSeconds={setSeconds}
                />
              </div>
            </div>
          </div>
        </div>
    )
}

