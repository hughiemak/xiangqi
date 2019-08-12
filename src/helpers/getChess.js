import getPlayers from "../helpers/getPlayers";
import getChessType from "../helpers/getChessType";

export default function getChess(chessType, player) {
  return { chessType: chessType, player: player };
}
