import React, {useState, useEffect } from 'react';

function Timer() {
    const [time, setTime] = useState(1500);

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds /60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="timer">
            <h3>Study Timer</h3>
            <p>{formatTime(time)}</p>
        </div>
    );
}

export default Timer;