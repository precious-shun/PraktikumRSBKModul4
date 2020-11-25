import React, { useState, useEffect, useRef } from 'react';
import "./Timer.css";



function Timer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        interval = setInterval (() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className="Main">
            <p className="Text">Timer dengan useRef</p>
            <p>Detik ke-{timer}</p>
            <p>Kelompok 37</p>
            

            <div className="ViewImage">
                <button className="Button" onClick={() => clearInterval(interval)}>
                    Za Warudo
                </button>
            </div>
        </div>
    )
}

export default Timer

