import React from "react";
import "../index.css";
import Piece from "./Piece.js";
import getChessType from "../helpers/getChessType";
import getPlayers from "../helpers/getPlayers";

export default class Elephant extends Piece {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Piece
        text={this.props.player === getPlayers().Red ? "相" : "象"}
        player={this.props.player}
      />
    );
  }
}
