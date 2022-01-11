import React, { useState } from 'react';
import "./App.css"
import Pause from './component/Pause';
import Timer from './component/Timer';




function App() {

    const [counting, setCounting] = useState(true)

    return (
        <div className='container-fluid p-0 m-0'>
          <div className="d-flex justify-content-center vh-100">
            <div className="my-auto">
              <Timer initialMinute={5} initialSeconds={5} counting={counting}/>
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

export default App;
