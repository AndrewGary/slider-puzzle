import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Store";

export default function GameControls(props) {
  const { setGameActive, gameActive, setTime, setSelectedImage, selectedImage, gameMessage, setGameMessage, time } = props;

  const [gameBoard, setGameBoard] = useContext(Context);

  const handleStartGame = async () => {
    console.log('selectedImage: ', selectedImage);
    if(selectedImage === null){
      console.log('inside if');
      setGameMessage('Plase select an image before starting game');
    }else{
      setGameMessage('');
      const scrambledBoard = [];
    const returnArray = [];

    while (scrambledBoard.length < 16) {
      const newNumber = Math.floor(Math.random() * 16);

      if (!scrambledBoard.includes(newNumber)) {
        scrambledBoard.push(newNumber);
      }
    }

    for(let i = 0; i < scrambledBoard.length; i++){
        returnArray.push(gameBoard[scrambledBoard[i]])
    }

    console.log('returnArray: ', returnArray);
    
    setGameActive(true);
    setGameBoard(returnArray);}
  };

  const handleRestartGame = () => {
    const scrambledBoard = [];
    const returnArray = [];

    while (scrambledBoard.length < 16) {
      const newNumber = Math.floor(Math.random() * 16);

      if (!scrambledBoard.includes(newNumber)) {
        scrambledBoard.push(newNumber);
      }
    }

    for(let i = 0; i < scrambledBoard.length; i++){
        returnArray.push(gameBoard[scrambledBoard[i]])
    }

    setGameBoard([]);
    setSelectedImage(null);
    setTime(0);
    setGameActive(false);
    
  }

  useEffect(() => {
    if(selectedImage !== null && !gameActive && time === 0){
      setGameMessage('Image will show up once you start game')
    }
    if(selectedImage !== null && gameActive){
      setGameMessage('');
    }
  }, [selectedImage, gameActive])

  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="sm:text-xl sm:font-semibold flex justify-center mb-4 text-3xl text-red-500">{gameMessage}</h2>
      {
        time > 0 ?
        // <button
        //   onClick={handleRestartGame}
        //   className="sm:px-4 sm:py-2 sm:text-sm border border-gray-300 rounded-md px-20 py-10 text-4xl hover:border-gray-500 w-2/5"
        // >
        <button
        onClick={handleStartGame}
        className='border border-slate-500 rounded-md px-4'
      >
          Restart Game
        </button> :
      //   <button
      //   onClick={handleStartGame}
      //   className="sm:px-4 sm:py-2 sm:text-sm border border-gray-300 rounded-md px-20 py-10 text-4xl hover:border-gray-500 w-2/5"
      // >
      <button
        onClick={handleStartGame}
        className='border border-slate-500 rounded-md px-4'
      >
        Start Game
      </button>
      }
    </div>
  );
}
