import getChessType from "./getChessType";
import getChess from "./getChess";
import getPlayers from "./getPlayers";

export default function initChessBoard() {
  console.log("initChessBoard");
  const squares = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ];

  squares[1][1] = getChess(getChessType().King, getPlayers().Red);

  squares[3][4] = getChess(getChessType().King, getPlayers().Black);

  squares[6][6] = getChess(getChessType().King, getPlayers().Red);

  squares[7][7] = getChess(getChessType().King, getPlayers().Black);

  // squares[0][0] = getChessType().King;

  // squares[5][5] = getChessType().King;

  return squares;
}
