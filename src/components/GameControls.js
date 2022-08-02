import React, { useContext } from 'react'
import BoardPiece from './BoardPiece';
import { Context } from '../Store';

export default function GameControls(props) {

    const [test, setTest ] = useContext(Context);

    const handleStartGame = () => {
        const scrambledBoard = [];

        while(scrambledBoard.length < 16){
            const newNumber = Math.floor(Math.random() * 16);

            if(!scrambledBoard.includes(newNumber)){
                scrambledBoard.push(newNumber)
            }
        }

        const index = scrambledBoard.indexOf(15);
        scrambledBoard[index] = null;


        ///NEXT STEP THIS IS WHERE I LEFT OFF
        //Converting map to a for loop so I can set the up down left and right of the pieces so i can detect if piece clicked on is movable
        const newGameBoard = [];
        for(let i = 0; i < 16; i++){
            if(i === 0){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={null} down={4} left={null} right={1}/>)
            }
            if(i === 1){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={null} down={5} left={0} right={2}/>)
            }
            if(i === 2){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={null} down={6} left={1} right={3}/>)
            }
            if(i === 3){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={null} down={7} left={2} right={null}/>)
            }
            if(i === 4){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={0} down={8} left={null} right={5}/>)
            }
            if(i === 5){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={1} down={9} left={4} right={6}/>)
            }
            if(i === 6){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={2} down={10} left={5} right={7}/>)
            }
            if(i === 7){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={3} down={11} left={6} right={null}/>)
            }
            if(i === 8){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={4} down={12} left={null} right={9}/>)
            }
            if(i === 9){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={5} down={13} left={8} right={10}/>)
            }
            if(i === 10){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={6} down={14} left={9} right={11}/>)
            }
            if(i === 11){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={7} down={15} left={10} right={null}/>)
            }
            if(i === 12){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={8} down={null} left={null} right={13}/>)
            }
            if(i === 13){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={9} down={null} left={12} right={14}/>)
            }
            if(i === 14){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={10} down={null} left={13} right={15}/>)
            }
            if(i === 15){
                newGameBoard.push(<BoardPiece originalPosition={scrambledBoard[i]} up={11} down={null} left={14} right={null}/>)
            }
        }
        // props.setGameBoard(newGameBoard)
        setTest(newGameBoard)
    }

  return (
    <div>
        <button onClick={handleStartGame} className='border border-gray-300 rounded-md'>
            Start Game
        </button>
    </div>
  )
}
