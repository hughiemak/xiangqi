import getPlayers from "../helpers/getPlayers";
import getChessType from "../helpers/getChessType";
import getChess from "../helpers/getChess";
export default function getDefaultHolderContent() {
  return {
    Black: [
      [
        getChess(getChessType().Chariot, getPlayers().Black, { y: 0, x: 0 }),
        getChess(getChessType().Horse, getPlayers().Black, { y: 0, x: 1 }),
        getChess(getChessType().Cannon, getPlayers().Black, { y: 0, x: 2 }),
        getChess(getChessType().Elephant, getPlayers().Black, { y: 0, x: 3 }),
        getChess(getChessType().Advisor, getPlayers().Black, { y: 0, x: 4 }),
        getChess(getChessType().King, getPlayers().Black, { y: 0, x: 5 }),
        getChess(getChessType().Advisor, getPlayers().Black, { y: 0, x: 6 }),
        getChess(getChessType().Elephant, getPlayers().Black, { y: 0, x: 7 })
      ],
      [
        getChess(getChessType().Chariot, getPlayers().Black, { y: 1, x: 0 }),
        getChess(getChessType().Horse, getPlayers().Black, { y: 1, x: 1 }),
        getChess(getChessType().Cannon, getPlayers().Black, { y: 1, x: 2 }),
        getChess(getChessType().Soldier, getPlayers().Black, { y: 1, x: 3 }),
        getChess(getChessType().Soldier, getPlayers().Black, { y: 1, x: 4 }),
        getChess(getChessType().Soldier, getPlayers().Black, { y: 1, x: 5 }),
        getChess(getChessType().Soldier, getPlayers().Black, { y: 1, x: 6 }),
        getChess(getChessType().Soldier, getPlayers().Black, { y: 1, x: 7 })
      ]
    ],
    Red: [
      [
        getChess(getChessType().Chariot, getPlayers().Red, { y: 0, x: 0 }),
        getChess(getChessType().Horse, getPlayers().Red, { y: 0, x: 1 }),
        getChess(getChessType().Cannon, getPlayers().Red, { y: 0, x: 2 }),
        getChess(getChessType().Soldier, getPlayers().Red, { y: 0, x: 3 }),
        getChess(getChessType().Soldier, getPlayers().Red, { y: 0, x: 4 }),
        getChess(getChessType().Soldier, getPlayers().Red, { y: 0, x: 5 }),
        getChess(getChessType().Soldier, getPlayers().Red, { y: 0, x: 6 }),
        getChess(getChessType().Soldier, getPlayers().Red, { y: 0, x: 7 })
      ],
      [
        getChess(getChessType().Chariot, getPlayers().Red, { y: 1, x: 0 }),
        getChess(getChessType().Horse, getPlayers().Red, { y: 1, x: 1 }),
        getChess(getChessType().Cannon, getPlayers().Red, { y: 1, x: 2 }),
        getChess(getChessType().Elephant, getPlayers().Red, { y: 1, x: 3 }),
        getChess(getChessType().Advisor, getPlayers().Red, { y: 1, x: 4 }),
        getChess(getChessType().King, getPlayers().Red, { y: 1, x: 5 }),
        getChess(getChessType().Advisor, getPlayers().Red, { y: 1, x: 6 }),
        getChess(getChessType().Elephant, getPlayers().Red, { y: 1, x: 7 })
      ]
    ]
  };
}
