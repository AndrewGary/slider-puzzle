import React, { useState, useEffect } from 'react';


const Timer = props => {
    
    const {gameActive, setGameActive } = props;

    const [ time, setTime ] = useState(0);

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
        <div>
            {time}
        </div>
    )
}

export default Timer;




// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../Store";

// const Timer = (props) => {
//   // const [ isActive, setIsActive ] = useState(false);
//   const { gameActive } = props;
//   const [time, setTime] = useState(0);

//   console.log('gameActive: ', gameActive);

//   useEffect(() => {
//     let interval = null;

//     console.log("gameActive: ", gameActive);

//     if (!gameActive) {
//         console.log('game is active');
//       interval = setInterval(() => {
//         setTime((time) => time + 10);
//       }, 10);
//     } else {
//         console.log('game is not active');
//       clearInterval(interval);
//     }
//   }, [props.gameActive]);

//   return (
//     <div className="timer">
//       <span className="digits">
//         {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
//       </span>
//       <span className="digits">
//         {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
//       </span>
//       <span className="digits mili-sec">
//         {("0" + ((time / 10) % 100)).slice(-2)}
//       </span>
//     </div>
//   );
// };

// // const ControlButtons = props => {
// //     const StartButton = (
// //     <div className="btn btn-one btn-start"
// //          onClick={props.handleStart}>
// //       Start
// //     </div>
// //   );
// //   const ActiveButtons = (
// //     <div className="btn-grp">
// //       <div className="btn btn-two"
// //            onClick={props.handleReset}>
// //         Reset
// //       </div>
// //       <div className="btn btn-one"
// //            onClick={props.handlePauseResume}>
// //         {props.isPaused ? "Resume" : "Pause"}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="Control-Buttons">
// //       <div>{props.active ? ActiveButtons : StartButton}</div>
// //     </div>
// //   )
// // }

// // const StopWatch = props => {

// //     const [isActive, setIsActive] = useState(false);
// //     const [isPaused, setIsPaused] = useState(true);
// //     const [time, setTime] = useState(0);

// //     useEffect(() => {
// //       let interval = null;

// //       if (isActive && isPaused === false) {
// //         interval = setInterval(() => {
// //           setTime((time) => time + 10);
// //         }, 10);
// //       } else {
// //         clearInterval(interval);
// //       }
// //       return () => {
// //         clearInterval(interval);
// //       };
// //     }, [isActive, isPaused]);

// //     const handleStart = () => {
// //       setIsActive(true);
// //       setIsPaused(false);
// //     };

// //     const handlePauseResume = () => {
// //       setIsPaused(!isPaused);
// //     };

// //     const handleReset = () => {
// //       setIsActive(false);
// //       setTime(0);
// //     };

// //     return (
// //       <div className="stop-watch">
// //         <Timer time={time} />
// //         <ControlButtons
// //           active={isActive}
// //           isPaused={isPaused}
// //           handleStart={handleStart}
// //           handlePauseResume={handlePauseResume}
// //           handleReset={handleReset}
// //         />
// //       </div>
// //     );
// // }

// export default Timer;
