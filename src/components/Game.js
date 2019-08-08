import React from "react";
import "../index.css";
import Board from "./Board.js";
import Square from "./Square.js";
import King from "./King.js";
import initChessBoard from "../helpers/initChessBoard";
import getMovePossibleByChessType from "../helpers/getMovePossibleByChessType";
import getPieceByCoord from "../helpers/getPieceByCoord";
import getMoveOutcome from "../helpers/getMoveOutcome";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initChessBoard(),
      isSelectingChess: true, //false when placing chess to destination
      selectedSquare: null
    };
  }

  isSelectingChess() {
    if (this.state.isSelectingChess) {
      return true;
    } else {
      return false;
    }
  }

  isPlacingPiece() {
    if (this.state.isSelectingChess) {
      return false;
    } else {
      return true;
    }
  }

  squreHavePiece(sq) {
    if (sq.state.piece === null) {
      return false;
    } else {
      return true;
    }
  }

  handleClick(sq) {
    // console.log("sq.state.piece: " + JSON.stringify(sq.state.piece));
    console.log("this.isSelectingChess(): " + this.isSelectingChess());

    if (this.isSelectingChess()) {
      if (this.squreHavePiece(sq)) {
        console.log("sq.state.coord: " + JSON.stringify(sq.state.coord));
        //selected a square containaing a piece
        this.setState({ selectedSquare: sq }, function() {
          this.state.isSelectingChess = false;
        });
      } else {
        //selecting an empty square
        // console.log("sq.state.coord: " + JSON.stringify(sq.state.coord));
      }
    } else {
      //determine if is a valid move

      const chessType = this.state.selectedSquare.state.piece;
      const src = this.state.selectedSquare.state.coord;
      const dest = sq.state.coord;
      var squares = this.state.squares;

      // console.log(
      //   "chessType: " + chessType + ", src: " + src + ", dest:" + dest
      // );

      const isMovePossible = getMovePossibleByChessType(
        src,
        dest,
        chessType,
        squares
      );

      console.log("isMovePossible: " + isMovePossible);

      if (isMovePossible) {
        //if move possible
        const srcPiece = getPieceByCoord(src, squares);
        const destPiece = getPieceByCoord(dest, squares);

        if (destPiece != null) {
          // TODO: store fallen piece
        }

        // console.log("this.state.squares: " + this.state.squares);

        //this.state.squares: 1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

        // var newSquares = JSON.parse(JSON.stringify(this.state.squares));

        // newSquares[src.y][src.x] = null;

        // newSquares[dest.y][dest.x] = chessType;

        // console.log("this.state.squares: " + this.state.squares);

        // this.state.squares: ,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

        const outcome = getMoveOutcome(chessType, src, dest, squares);

        this.setState(
          {
            squares: outcome
          },
          function() {
            this.setState({ isSelectingChess: true });
          }
        );
      } else {
        //if move not possible
        this.setState({ isSelectingChess: false });
      }
    }

    // if (sq.state.piece === null) {
    //   //no piece in the sq
    //   return;
    // } else {
    //   // have piece in the sq
    // }
  }

  render() {
    // console.log("this.state.squares: " + this.state.squares);
    return (
      <div>
        {/* Hello */}
        {/* <King /> */}
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
