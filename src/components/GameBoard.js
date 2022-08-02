import React, {useEffect, useState, useContext} from 'react'
import BoardPiece from './BoardPiece'
import { solution } from '../utils/utils';
import GameControls from './GameControls';
import { Context } from '../Store';

export default function GameBoard() {
  
    const [gameBoard, setGameBoard ] = useState(solution);
    const [test, setTest] = useContext(Context);
    console.log('test: ', test);
    console.log('gameBoard: ', gameBoard);

    useEffect(() => {

    }, [])
  
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center border border-red-500'>
            <div className='flex flex-wrap w-500 h-500 '>
                {test.map(BoardPiece => {
                    return BoardPiece
                })}
            </div>
            <GameControls setGameBoard={setGameBoard}/>
        </div>
  )
}
