import React, { useEffect, useContext } from 'react'
import { solution } from '../utils/utils';
import GameControls from './GameControls';
import { Context } from '../Store';
import { winningArray } from '../utils/utils';

export default function GameBoard() {

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
        console.log('checkIfGameIsOver() : ', checkIfGameIsOver())
    }, [gameBoard])
  
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center border border-red-500'>
            <div className='flex flex-wrap w-500 h-500 '>
                {solution.map(BoardPiece => {
                    return BoardPiece
                })}
            </div>
            <GameControls setGameBoard={setGameBoard}/>
        </div>
  )
}
