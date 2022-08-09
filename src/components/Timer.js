import React, { useEffect } from 'react';

const Timer = props => {
    
    const {gameActive, time, setTime } = props;

    useEffect(() => {
        let interval = null;

        if(gameActive){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10)
        }else{

        }

        return () => {clearInterval(interval)}
    }, )
    
    return(
        <div className='flex justify-center text-3xl'>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{('0' + ((time / 10) %100)).slice(-2)}</span>
        </div>
    )
}

export default Timer;