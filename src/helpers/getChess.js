import getPlayers from "../helpers/getPlayers";
import getChessType from "../helpers/getChessType";

export default function getChess(chessType, player, holderPosition) {
  return {
    chessType: chessType,
    player: player,
    holderPosition: holderPosition
  };
}
