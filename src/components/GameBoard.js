import React, { useEffect, useContext} from "react";
import { solution } from "../utils/utils";
import GameControls from "./GameControls";
import { Context } from "../Store";
import Timer from "./Timer";
import { cutImageUp } from "../utils/utils";
import wolf from "../images/Wolf.png";
import { checkIfGameIsOver } from "../utils/utils";
import Title from "./Title";

export default function GameBoard(props) {
  const { gameActive, setGameActive, time, setTime } = props;

  const [gameBoard, setGameBoard] = useContext(Context);

  useEffect(() => {
    if (checkIfGameIsOver(gameBoard) === true) {
      setGameActive(false);
    }
  }, [gameBoard]);

  useEffect(() => {
    const idk = cutImageUp();
    setGameBoard(idk);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly border border-red-500">
        <Title />
      <div className="flex w-full border border-green-500 justify-evenly">
        <div className="flex flex-wrap w-500 h-500 ">
          {solution.map((BoardPiece) => {
            return BoardPiece;
          })}
        </div>
        <img src={wolf} alt="wolf" />
      </div>
      <div>
        <GameControls
          setGameBoard={setGameBoard}
          setGameActive={setGameActive}
          gameActive={gameActive}
          time={time}
          setTime={setTime}
        />
        <Timer gameActive={gameActive} time={time} setTime={setTime} />
      </div>
    </div>
  );
}
