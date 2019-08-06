import React from "react";
import King from "../components/King";

var chessType = Object.freeze({ King: 1, Guard: 2 });

// exports.getChessType = function() {
//   return chessType;
// };

export default function getChessType() {
  return chessType;
}
