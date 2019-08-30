export default function getOutcomeAfterAddPiece(sqData, dest, squares) {
  var newSquares = JSON.parse(JSON.stringify(squares));

  console.log("dest.y: " + JSON.stringify(dest.y));
  console.log("dest.x: " + JSON.stringify(dest.x));

  console.log("sqData: " + JSON.stringify(sqData));

  newSquares[dest.y][dest.x] =
    sqData.holderContent[sqData.square.y][sqData.square.x];

  return newSquares;
}
