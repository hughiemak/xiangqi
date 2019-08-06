import React from "react";
import "../index.css";
import Piece from "./Piece.js";
import getChessType from "../helpers/getChessType";

export default class King extends Piece {
  constructor(props) {
    super(props);
  }

  render() {
    return <Piece text="帥" />;
  }

  isMovePossible(src, dest) {
    const xDiff = Math.abs(dest.x - src.x);
    const yDiff = Math.abs(dest.y - src.y);

    return (xDiff == 0 || xDiff == 1) && (yDiff == 0 || yDiff == 1);
  }

  getChessType() {
    return getChessType().King;
  }
}
