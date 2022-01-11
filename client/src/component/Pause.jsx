import React, { useState } from 'react'

export default function Pause(props){
    const {setCounting, counting} = props

    if (counting){
        return(
            <button className="mx-auto btn app-circle" onClick={() => setCounting(!counting)}>
                <h1 className='text-center pause'>||</h1>
            </button>
        )
    }else{
        return(
            <button className="mx-auto btn app-circle" onClick={() => setCounting(!counting)}>
                <h1 className='text-center my-auto play'><i className="fa-solid fa-play"></i></h1>
            </button>
        )
    }

    
}