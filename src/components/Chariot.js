import React from "react";
import "../index.css";
import Piece from "./Piece.js";
import getChessType from "../helpers/getChessType";
import getPlayers from "../helpers/getPlayers";

export default class Chariot extends Piece {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Piece
        text={this.props.player === getPlayers().Red ? "俥" : "車"}
        player={this.props.player}
      />
    );
  }
}
