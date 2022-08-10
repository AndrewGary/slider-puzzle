
import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../Store';
import LoadingSpinner from './LoadingSpinner';

export default function BoardPiece(props) {

    const {position, up, down, left, right } = props;

    const [ gameBoard, setGameBoard ] = useContext(Context);
    const [ pieceImage, setPieceImage ] = useState(null);

    // console.log('gameBoard[position]: ', gameBoard[position])

    const checkIfMovable = () =>{

      if(gameBoard[up] === null){
        // console.log('can move up')
        return {canMove: true, direction: up};
      }else if(gameBoard[down] === null){
        // console.log('can move down')
        return {canMove: true, direction: down};
      }else if( gameBoard[left] === null){
        // console.log('can move left')
        return {canMove: true, direction: left};
      }else if(gameBoard[right] === null){
        // console.log('can move right')
        return {canMove: true, direction: right};
      }else{
        return {canMove: false, direction: null};
      }
    }

    const handleMove = e => {

        const canMove = checkIfMovable();
        
        if(canMove.canMove){
          let placeHolder = gameBoard[position];

          const tempGameBoard = [...gameBoard];
          tempGameBoard[position] = null;
          tempGameBoard[canMove.direction] = placeHolder;
          setGameBoard(tempGameBoard);;

        }else{
          console.log('not movable');
        }
    }

    useEffect(() => {
      setPieceImage(gameBoard[position])
    }, [gameBoard])

    return (
            <div
              onClick={handleMove}
              className="sm:w-100 sm:h-100 flex justify-center items-center w-125 h-125 border border-black hover:border-red-500"
            >
              {gameBoard[position] ? <img src={pieceImage} /> : null}
            </div>
          );
}