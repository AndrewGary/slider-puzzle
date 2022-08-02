import React, { useContext } from "react";
import Store from "../Store";
import { Context } from "../Store";

export default function BoardPiece(props) {
  const [gameBoard, setGameBoard] = useContext(Context);

  const { originalPosition, up, down, left, right } = props;

  const handleClick = (e) => {
    console.log('gameBoard: ', gameBoard);

    if(gameBoard[up] && gameBoard[up].props.originalPosition === null){
        
        console.log('inside if statement');
        const placeholder = originalPosition;
        // const placeHolder = e.target;
        // console.log(originalPosition)

    }

    // if (
    //   (gameBoard[up] && gameBoard[up].props.originalPosition === null) ||
    //   (gameBoard[down] && gameBoard[down].props.originalPosition === null) ||
    //   (gameBoard[left] && gameBoard[left].props.originalPosition === null) ||
    //   (gameBoard[right] && gameBoard[right].props.originalPosition === null)
    // ) {
    //   //Do this if gamePiece is movable
    //   console.log('movable')

    //   const placeHolder = e.target;
    //   console.log(placeHolder);
    // } else {
    //   //This means game piece is not movable
    //   console.log("not movable");
    // }
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-125 h-125 border border-black hover:border-red-500"
    >
      {originalPosition}
    </div>
  );
}
