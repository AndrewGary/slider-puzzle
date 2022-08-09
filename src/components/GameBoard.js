import React, { useEffect, useContext, useState} from "react";
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

export default function GameBoard(props) {
  const { gameActive, setGameActive, time, setTime } = props;

  const [gameBoard, setGameBoard] = useContext(Context);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = e => {
    console.log(e)
  }

  useEffect(() => {
    if (checkIfGameIsOver(gameBoard) === true) {
      setGameActive(false);
    }
  }, [gameBoard]);

  useEffect(() => {
    const idk = cutImageUp(selectedImage);
    setGameBoard(idk);
  }, [selectedImage]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly">
        <Title />
      <div className="flex w-full justify-evenly">
        <div className="flex flex-wrap w-500 h-500 ">
          {solution.map((BoardPiece) => {
            return BoardPiece;
          })}
        </div>
        {/* <div className="flex flex-wrap w-500, h-500 justify-evenly items-center">
            {arrayOfImages.map((image, index) => {
                return <img onClick={handleImageSelection} className="w-2/5 h-2/5" src={image.img}  />
            })}
        </div> */}
        {selectedImage !== null ? <SolutionImage image={arrayOfImages[selectedImage]} setSelectedImage={setSelectedImage}/> : <ImageSelection setSelectedImage={setSelectedImage}/>}
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
