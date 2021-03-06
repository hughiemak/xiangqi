import React from "react";
import King from "../components/King";
import Advisor from "../components/Advisor";
import getChessType from "../helpers/getChessType";
import Elephant from "../components/Elephant";
import Soldier from "../components/Soldier";
import Chariot from "../components/Chariot";
import Cannon from "../components/Cannon";
import Horse from "../components/Horse";

export default function getChessComponent(piece) {
  // console.log("piece: " + piece);
  if (piece == null) {
    return null;
  } else {
    const player = piece.player;

    switch (piece.chessType) {
      case getChessType().King:
        //   console.log("HAVE KING!");
        return <King player={player} />;
        break;
      case getChessType().Advisor:
        return <Advisor player={player} />;
      case getChessType().Elephant:
        return <Elephant player={player} />;
      case getChessType().Cannon:
        return <Cannon player={player} />;
      case getChessType().Horse:
        return <Horse player={player} />;
      case getChessType().Chariot:
        return <Chariot player={player} />;
      case getChessType().Soldier:
        return <Soldier player={player} />;
      default:
        return null;
    }
  }
}
