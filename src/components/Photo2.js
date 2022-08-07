import React, { useState, useEffect } from "react";
import wolf from "../images/Wolf.png";

export default function Photo2() {
  const [splitImage, setSplitImage] = useState([]);

  let image = new Image();

  const cutImageUp = () => {
    var imagePieces = [];
    for (var x = 0; x < 4; ++x) {
      for (var y = 0; y < 4; ++y) {
        var canvas = document.createElement("canvas");
        canvas.width = 125;
        canvas.height = 125;
        var context = canvas.getContext("2d");
        context.drawImage(
          image,
          y * 125,
          x * 125,
          125,
          125,
          0,
          0,
          canvas.width,
          canvas.height
        );
        imagePieces.push(canvas.toDataURL());
      }
    }
    setSplitImage(imagePieces);
  };

  useEffect(() => {
    // let image = new Image();
    image.onload = cutImageUp;
    image.src = wolf;
  }, []);

  return(
    <div>
      {splitImage.map(tile => {
        return <img src={tile} />
      })}
    </div>
  )
}
