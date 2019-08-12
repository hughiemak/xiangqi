import React from "react";
import King from "../components/King";
import getChessType from "../helpers/getChessType";

export default function getChessComponent(piece) {
  // console.log("piece: " + piece);
  if (piece === null) {
    return null;
  } else {
    const player = piece.player;

    switch (piece.chessType) {
      case getChessType().King:
        //   console.log("HAVE KING!");
        return <King player={player} />;
        break;
      default:
        return null;
    }
  }
}
