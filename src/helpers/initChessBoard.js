import getChessType from "./getChessType";
import getChess from "./getChess";
import getPlayers from "./getPlayers";

export default function initChessBoard(auto) {
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

  const autoInitBoard = auto;

  if (autoInitBoard) {
    // Kings
    squares[0][4] = getChess(getChessType().King, getPlayers().Red, {
      y: 1,
      x: 5
    });

    squares[9][4] = getChess(getChessType().King, getPlayers().Black, {
      y: 0,
      x: 5
    });

    // Advisors
    squares[0][5] = getChess(getChessType().Advisor, getPlayers().Red, {
      y: 1,
      x: 4
    });
    squares[0][3] = getChess(getChessType().Advisor, getPlayers().Red, {
      y: 1,
      x: 6
    });

    squares[9][5] = getChess(getChessType().Advisor, getPlayers().Black, {
      y: 0,
      x: 4
    });
    squares[9][3] = getChess(getChessType().Advisor, getPlayers().Black, {
      y: 0,
      x: 6
    });
    // Elephants
    squares[0][2] = getChess(getChessType().Elephant, getPlayers().Red, {
      y: 1,
      x: 3
    });
    squares[0][6] = getChess(getChessType().Elephant, getPlayers().Red, {
      y: 1,
      x: 7
    });

    squares[9][6] = getChess(getChessType().Elephant, getPlayers().Black, {
      y: 0,
      x: 3
    });
    squares[9][2] = getChess(getChessType().Elephant, getPlayers().Black, {
      y: 0,
      x: 7
    });

    // Cannons
    squares[2][1] = getChess(getChessType().Cannon, getPlayers().Red, {
      y: 0,
      x: 2
    });
    squares[2][7] = getChess(getChessType().Cannon, getPlayers().Red, {
      y: 1,
      x: 2
    });

    squares[7][1] = getChess(getChessType().Cannon, getPlayers().Black, {
      y: 0,
      x: 2
    });
    squares[7][7] = getChess(getChessType().Cannon, getPlayers().Black, {
      y: 1,
      x: 2
    });

    // Horses
    squares[0][1] = getChess(getChessType().Horse, getPlayers().Red, {
      y: 0,
      x: 1
    });
    squares[0][7] = getChess(getChessType().Horse, getPlayers().Red, {
      y: 1,
      x: 1
    });

    squares[9][1] = getChess(getChessType().Horse, getPlayers().Black, {
      y: 0,
      x: 1
    });
    squares[9][7] = getChess(getChessType().Horse, getPlayers().Black, {
      y: 1,
      x: 1
    });

    // Chariots
    squares[0][0] = getChess(getChessType().Chariot, getPlayers().Red, {
      y: 0,
      x: 0
    });
    squares[0][8] = getChess(getChessType().Chariot, getPlayers().Red, {
      y: 1,
      x: 0
    });

    squares[9][0] = getChess(getChessType().Chariot, getPlayers().Black, {
      y: 0,
      x: 0
    });
    squares[9][8] = getChess(getChessType().Chariot, getPlayers().Black, {
      y: 1,
      x: 0
    });

    // Soldiers
    squares[3][0] = getChess(getChessType().Soldier, getPlayers().Red, {
      y: 0,
      x: 3
    });
    squares[3][2] = getChess(getChessType().Soldier, getPlayers().Red, {
      y: 0,
      x: 4
    });
    squares[3][4] = getChess(getChessType().Soldier, getPlayers().Red, {
      y: 0,
      x: 5
    });
    squares[3][6] = getChess(getChessType().Soldier, getPlayers().Red, {
      y: 0,
      x: 6
    });
    squares[3][8] = getChess(getChessType().Soldier, getPlayers().Red, {
      y: 0,
      x: 7
    });

    squares[6][0] = getChess(getChessType().Soldier, getPlayers().Black, {
      y: 1,
      x: 3
    });
    squares[6][2] = getChess(getChessType().Soldier, getPlayers().Black, {
      y: 1,
      x: 4
    });
    squares[6][4] = getChess(getChessType().Soldier, getPlayers().Black, {
      y: 1,
      x: 5
    });
    squares[6][6] = getChess(getChessType().Soldier, getPlayers().Black, {
      y: 1,
      x: 6
    });
    squares[6][8] = getChess(getChessType().Soldier, getPlayers().Black, {
      y: 1,
      x: 7
    });
  }

  return squares;
}
