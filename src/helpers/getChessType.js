import React from "react";
import getPlayers from "../helpers/getPlayers";
import King from "../components/King";

var chessType = Object.freeze({
  King: 1,
  Advisor: 2,
  Elephant: 3,
  Cannon: 4,
  Horse: 5,
  Chariot: 6,
  Soldier: 7
});

// exports.getChessType = function() {
//   return chessType;
// };

export default function getChessType() {
  return chessType;
}
