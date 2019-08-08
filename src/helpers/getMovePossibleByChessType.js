import getChessType from "../helpers/getChessType";

export default function isMovePossible(src, dest, chessType, squares) {
  // //is attempting to place the selected chess
  // if (this.squreHavePiece(sq)) {
  //   //have a piece in square
  //   //if is opponent chess
  //   //eat
  //   //else
  //   //cannot place
  // } else {
  //   //empty square
  //   //move selected chess from src to destination

  //   const src = this.state.selectedSquare;
  // }
  switch (chessType) {
    case getChessType().King:
      const xDiff = Math.abs(dest.x - src.x);
      const yDiff = Math.abs(dest.y - src.y);

      return (xDiff == 0 || xDiff == 1) && (yDiff == 0 || yDiff == 1);
      break;
    default:
  }
}
