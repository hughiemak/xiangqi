export default function getOutcomeAfterRemovePiece(coord, squares) {
  var newSquares = JSON.parse(JSON.stringify(squares));

  console.log("dest.y: " + JSON.stringify(coord.y));
  console.log("dest.x: " + JSON.stringify(coord.x));

  // console.log("sqData: " + JSON.stringify(sqData));

  newSquares[coord.y][coord.x] = null;

  return newSquares;
}
