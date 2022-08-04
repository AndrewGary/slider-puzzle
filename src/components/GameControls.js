import React, { useContext } from 'react'
import { Context } from '../Store';

export default function GameControls(props) {

    const {setGameActive} = props;

    const [gameBoard, setGameBoard ] = useContext(Context);

    const handleStartGame = async () => {
        const scrambledBoard = [];

        while(scrambledBoard.length < 16){
            const newNumber = Math.floor(Math.random() * 16);

            if(!scrambledBoard.includes(newNumber)){
                scrambledBoard.push(newNumber)
            }
        }

        const index = scrambledBoard.indexOf(15);

        scrambledBoard[index] = null;

        setGameActive(true);
        setGameBoard(scrambledBoard)
    }

  return (
    <div>
        <button onClick={handleStartGame} className='border border-gray-300 rounded-md'>
            Start Game
        </button>
    </div>
  )
}
