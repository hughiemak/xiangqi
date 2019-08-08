export default function getMoveOutcome(chessType, src, dest, squares) {
  var newSquares = JSON.parse(JSON.stringify(squares));

  newSquares[src.y][src.x] = null;

  newSquares[dest.y][dest.x] = chessType;

  return newSquares;
}
