import React, { useEffect, useContext, useState } from 'react'
import { solution } from '../utils/utils';
import GameControls from './GameControls';
import { Context } from '../Store';
import { winningArray } from '../utils/utils';
import Timer from './Timer';

export default function GameBoard(props) {

    const { gameActive, setGameActive, time, setTime } = props;

    const checkIfGameIsOver = () => {
        for(let i = 0; i < 16; i++){
          if(gameBoard[i] !== winningArray[i]){
            return false
          }
        }
      return true;
    }

    const [gameBoard, setGameBoard] = useContext(Context);

    useEffect(() => {
        console.log('gameActive has changed to: ', gameActive);
    }, [gameActive])

    useEffect(() => {
        if(checkIfGameIsOver() === true){
            setGameActive(false);
        }
    }, [gameBoard])
  
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center border border-red-500'>
            <div className='flex flex-wrap w-500 h-500 '>
                {solution.map(BoardPiece => {
                    return BoardPiece
                })}
            </div>
            <div>
                <GameControls setGameBoard={setGameBoard} setGameActive={setGameActive} gameActive={gameActive} time={time} setTime={setTime}/>
                <Timer gameActive={gameActive} time={time} setTime={setTime}/>
                <button onClick={() => setGameBoard([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, 14])}>Solve</button>
            </div>
        </div>
  )
}
