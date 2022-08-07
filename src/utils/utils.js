import BoardPiece from "../components/BoardPiece";
import wolf from '../Wolf.png';

export const cutImageUp = (imageToCut) => {

  const splitImage = [];

  const onloadFunction = () => {
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
      splitImage.push(canvas.toDataURL());
    }
  }
  splitImage[15] = null;
}
const image = new Image();
  image.onload = onloadFunction;
  image.src = wolf;
  return splitImage
};

export const winningArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null]

export const winTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, 14]


export const solution = [
  <BoardPiece key={0} position={0} up={null} down={4} left={null} right={1} />,
  <BoardPiece key={1} position={1} up={null} down={5} left={0} right={2} />,
  <BoardPiece key={2} position={2} up={null} down={6} left={1} right={3} />,
  <BoardPiece key={3} position={3} up={null} down={7} left={2} right={null} />,
  <BoardPiece key={4} position={4} up={0} down={8} left={null} right={5} />,
  <BoardPiece key={5} position={5} up={1} down={9} left={4} right={6} />,
  <BoardPiece key={6} position={6} up={2} down={10} left={5} right={7} />,
  <BoardPiece key={7} position={7} up={3} down={11} left={6} right={null} />,
  <BoardPiece key={8} position={8} up={4} down={12} left={null} right={9} />,
  <BoardPiece key={9} position={9} up={5} down={13} left={8} right={10} />,
  <BoardPiece key={10} position={10} up={6} down={14} left={9} right={11} />,
  <BoardPiece key={11} position={11} up={7} down={15} left={10} right={null} />,
  <BoardPiece key={12} position={12} up={8} down={null} left={null} right={13} />,
  <BoardPiece key={13} position={13} up={9} down={null} left={12} right={14} />,
  <BoardPiece key={14} position={14} up={10} down={null} left={13} right={15} />,
  <BoardPiece key={15} position={15} up={11} down={null} left={14} right={null} />,
];
