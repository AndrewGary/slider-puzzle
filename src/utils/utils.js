import BoardPiece from "../components/BoardPiece";

export const winningArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null]

export const winTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, 14]

export const solution = [
  <BoardPiece position={0} up={null} down={4} left={null} right={1} />,
  <BoardPiece position={1} up={null} down={5} left={0} right={2} />,
  <BoardPiece position={2} up={null} down={6} left={1} right={3} />,
  <BoardPiece position={3} up={null} down={7} left={2} right={null} />,
  <BoardPiece position={4} up={0} down={8} left={null} right={5} />,
  <BoardPiece position={5} up={1} down={9} left={4} right={6} />,
  <BoardPiece position={6} up={2} down={10} left={5} right={7} />,
  <BoardPiece position={7} up={3} down={11} left={6} right={null} />,
  <BoardPiece position={8} up={4} down={12} left={null} right={9} />,
  <BoardPiece position={9} up={5} down={13} left={8} right={10} />,
  <BoardPiece position={10} up={6} down={14} left={9} right={11} />,
  <BoardPiece position={11} up={7} down={15} left={10} right={null} />,
  <BoardPiece position={12} up={8} down={null} left={null} right={13} />,
  <BoardPiece position={13} up={9} down={null} left={12} right={14} />,
  <BoardPiece position={14} up={10} down={null} left={13} right={15} />,
  <BoardPiece position={15} up={11} down={null} left={14} right={null} />,
];
