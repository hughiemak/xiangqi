export default function addPieceToBoard(sqData, dest, squares) {
  var newSquares = JSON.parse(JSON.stringify(squares));

  console.log("dest.y: " + JSON.stringify(dest.y));
  console.log("dest.x: " + JSON.stringify(dest.x));

  newSquares[dest.y][dest.x] = sqData.piece;

  return newSquares;
}
