import React from "react";
import "../index.css";
import Board from "./Board.js";
import Square from "./Square.js";
import Piece from "./Piece.js";

export default class Game extends React.Component {
  constructor() {
    super();
  }

  handleClick(coord) {
    console.log("coord: " + coord.x + ", " + coord.y);
  }

  render() {
    return (
      <div>
        Hello
        <Piece />
        <div className="game">
          <div className="game-board">
            <Board onClick={coord => this.handleClick(coord)} />
          </div>
        </div>
      </div>
    );
  }
}
