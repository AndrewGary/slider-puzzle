import React, { useContext } from "react";
import { Context } from "../Store";

export default function GameControls(props) {
  const { setGameActive, gameActive, setTime } = props;

  const [gameBoard, setGameBoard] = useContext(Context);

  const handleStartGame = async () => {
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
    setGameBoard(returnArray);
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

    setGameBoard(returnArray);
    
    setTime(0);


  }

  return (
    <div>
      {
        gameActive ?
        <button
          onClick={handleRestartGame}
          className="border border-gray-300 rounded-md"
        >
          Restart Game
        </button> :
        <button
        onClick={handleStartGame}
        className="border border-gray-300 rounded-md"
      >
        Start Game
      </button>
      }
    </div>
  );
}
