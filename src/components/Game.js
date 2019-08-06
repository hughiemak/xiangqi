import React from "react";
import "../index.css";
import Board from "./Board.js";
import Square from "./Square.js";
import King from "./King.js";
import initChessBoard from "../helpers/initChessBoard";
import getMovePossibleByChessType from "../helpers/getMovePossibleByChessType";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initChessBoard(),
      isSelectingChess: true //false when placing chess to destination
    };
  }

  handleClick(sq) {
    console.log("sq.state.piece: " + JSON.stringify(sq.state.piece));

    if (sq.state.piece === null) {
      //no piece in the sq
      return;
    } else {
      // have piece in the sq
    }
  }

  render() {
    // console.log("this.state.squares: " + this.state.squares);
    return (
      <div>
        {/* Hello */}
        <King />
        <div className="game">
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={sq => this.handleClick(sq)}
            />
          </div>
        </div>
      </div>
    );
  }
}
