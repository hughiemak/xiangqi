import getChessType from "../helpers/getChessType";

export default function isMovePossible(src, dest, chessType) {
  switch (chessType) {
    case getChessType().King:
      const xDiff = Math.abs(dest.x - src.x);
      const yDiff = Math.abs(dest.y - src.y);

      return (xDiff == 0 || xDiff == 1) && (yDiff == 0 || yDiff == 1);
      break;
    default:
  }
}
