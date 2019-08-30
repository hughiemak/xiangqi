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

  const autoInitBoard = false;

  if (autoInitBoard) {
    // Kings
    squares[0][4] = getChess(getChessType().King, getPlayers().Red);

    squares[9][4] = getChess(getChessType().King, getPlayers().Black);

    // Advisors
    squares[0][5] = getChess(getChessType().Advisor, getPlayers().Red);
    squares[0][3] = getChess(getChessType().Advisor, getPlayers().Red);

    squares[9][5] = getChess(getChessType().Advisor, getPlayers().Black);
    squares[9][3] = getChess(getChessType().Advisor, getPlayers().Black);

    // Elephants
    squares[0][2] = getChess(getChessType().Elephant, getPlayers().Red);
    squares[0][6] = getChess(getChessType().Elephant, getPlayers().Red);

    squares[9][6] = getChess(getChessType().Elephant, getPlayers().Black);
    squares[9][2] = getChess(getChessType().Elephant, getPlayers().Black);

    // Cannons
    squares[2][1] = getChess(getChessType().Cannon, getPlayers().Red);
    squares[2][7] = getChess(getChessType().Cannon, getPlayers().Red);

    squares[7][1] = getChess(getChessType().Cannon, getPlayers().Black);
    squares[7][7] = getChess(getChessType().Cannon, getPlayers().Black);

    // Horses
    squares[0][1] = getChess(getChessType().Horse, getPlayers().Red);
    squares[0][7] = getChess(getChessType().Horse, getPlayers().Red);

    squares[9][1] = getChess(getChessType().Horse, getPlayers().Black);
    squares[9][7] = getChess(getChessType().Horse, getPlayers().Black);

    // Chariots
    squares[0][0] = getChess(getChessType().Chariot, getPlayers().Red);
    squares[0][8] = getChess(getChessType().Chariot, getPlayers().Red);

    squares[9][0] = getChess(getChessType().Chariot, getPlayers().Black);
    squares[9][8] = getChess(getChessType().Chariot, getPlayers().Black);

    // Soldiers
    squares[3][0] = getChess(getChessType().Soldier, getPlayers().Red);
    squares[3][2] = getChess(getChessType().Soldier, getPlayers().Red);
    squares[3][4] = getChess(getChessType().Soldier, getPlayers().Red);
    squares[3][6] = getChess(getChessType().Soldier, getPlayers().Red);
    squares[3][8] = getChess(getChessType().Soldier, getPlayers().Red);

    squares[6][0] = getChess(getChessType().Soldier, getPlayers().Black);
    squares[6][2] = getChess(getChessType().Soldier, getPlayers().Black);
    squares[6][4] = getChess(getChessType().Soldier, getPlayers().Black);
    squares[6][6] = getChess(getChessType().Soldier, getPlayers().Black);
    squares[6][8] = getChess(getChessType().Soldier, getPlayers().Black);
  }

  return squares;
}