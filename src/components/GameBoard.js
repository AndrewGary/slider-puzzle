import React, { useEffect, useContext, useState } from "react";
import { solution } from "../utils/utils";
import GameControls from "./GameControls";
import { Context } from "../Store";
import Timer from "./Timer";
import { cutImageUp } from "../utils/utils";
import wolf from "../images/Wolf.png";
import { checkIfGameIsOver } from "../utils/utils";
import Title from "./Title";
import { arrayOfImages } from "../utils/utils";
import ImageSelection from "./ImageSelection";
import SolutionImage from "./SolutionImage";
import { winningArrays } from "../utils/utils";

export default function GameBoard(props) {
  const { gameActive, setGameActive, time, setTime } = props;

  const [gameBoard, setGameBoard] = useContext(Context);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gameMessage, setGameMessage] = useState("");

  const handleImageSelection = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      if (checkIfGameIsOver(gameBoard, selectedImage) === true && time > 0) {
        setGameMessage('You win!!!')
        setGameActive(false);
      }
    }
  }, [gameBoard]);

  useEffect(() => {
    const idk = cutImageUp(selectedImage);
    setGameBoard(idk);
  }, [selectedImage]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <Title selectedImage={selectedImage} />
      <div className="sm:flex-col sm:items-center flex w-full justify-center">
        <div className="sm:w-400 sm:h-400 flex flex-wrap w-500 h-500 mx-4">
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
      <div className="w-1/2">
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
        {/* This button is for testing what happens when someone wins */}
        {/* <button
          onClick={() => {
            setGameBoard(winningArrays[1]);
          }}
        >
          solve
        </button> */}
      </div>
    </div>
  );
}
