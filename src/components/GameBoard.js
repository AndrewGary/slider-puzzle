import React, { useEffect, useContext, useState } from "react";
import { solution } from "../utils/utils";
import GameControls from "./GameControls";
import { Context } from "../Store";
import Timer from "./Timer";
import { cutImageUp } from "../utils/utils";
import { checkIfGameIsOver } from "../utils/utils";
import Title from "./Title";
import { arrayOfImages } from "../utils/utils";
import ImageSelection from "./ImageSelection";
import SolutionImage from "./SolutionImage";

export default function GameBoard(props) {
  const { gameActive, setGameActive, time, setTime } = props;

  const [gameBoard, setGameBoard] = useContext(Context);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gameMessage, setGameMessage] = useState("");

  useEffect(() => {
    if (selectedImage !== null) {
      if (checkIfGameIsOver(gameBoard, selectedImage) === true && time > 0) {
        setGameMessage("You win!!!");
        setGameActive(false);
      }
    }
  }, [gameBoard]);

  useEffect(() => {
    const idk = cutImageUp(selectedImage);
    setGameBoard(idk);
  }, [selectedImage]);

  return (
    <div className="flex flex-col w-full h-screen items-center bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <Title selectedImage={selectedImage} />
      <div className="sm:flex-col sm:items-center flex w-full justify-center my-4">
        <div className={selectedImage === null ? "hidden" : "hidden sm:flex flex-wrap w-400 h-400 mx-4"}>
          {solution.map((BoardPiece) => {
            return BoardPiece;
          })}
        </div>

        <div className="sm:hidden flex flex-wrap w-500 h-500 mx-4">
          {solution.map((BoardPiece) => {
            return BoardPiece;
          })}
        </div>
        {selectedImage !== null ? (
          <SolutionImage
            image={arrayOfImages[selectedImage]}
            setSelectedImage={setSelectedImage}
          />
        ) : (
          <ImageSelection
            setGameMessage={setGameMessage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
      {/* <div className="w-1/2"> */}
      <div>
        <GameControls
          gameMessage={gameMessage}
          setGameMessage={setGameMessage}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
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
