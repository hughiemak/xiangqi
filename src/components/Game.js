import React from "react";
import "../index.css";
import Board from "./Board.js";
import Square from "./Square.js";
import King from "./King.js";
import initChessBoard from "../helpers/initChessBoard";
import getMovePossibleByChessType from "../helpers/getMovePossibleByChessType";
import getPieceByCoord from "../helpers/getPieceByCoord";
import getMoveOutcome from "../helpers/getMoveOutcome";
import { thisTypeAnnotation } from "@babel/types";
import getPlayers from "../helpers/getPlayers";
import DisplayBoard from "./ui/Board";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initChessBoard(),
      isSelectingChess: true, //false when placing chess to destination
      selectedSquare: null, //a square
      unselect: null, //a coordinate
      select: null, //a coordinate
      turn: getPlayers().Red
    };
  }

  toggleTurn() {
    const turn = this.state.turn;

    if (turn === getPlayers().Red) {
      this.setState({
        turn: getPlayers().Black
      });
    } else {
      this.setState({
        turn: getPlayers().Red
      });
    }
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

  activateSquare(coord) {}

  deactivateSquare(coord) {}

  handleClick(sq) {
    // console.log("sq.state.piece: " + JSON.stringify(sq.state.piece));
    // console.log("this.isSelectingChess(): " + this.isSelectingChess());

    // console.log("sq: " + JSON.stringify(sq.state));

    var squares = this.state.squares;

    const coord = sq.state.coord;

    const turn = this.state.turn;

    if (this.isSelectingChess()) {
      if (this.squreHavePiece(sq)) {
        const piece = getPieceByCoord(coord, squares);

        const pieceColor = piece.player;

        if (pieceColor === turn) {
          //G01
          console.log("G01: selecting your chess");
          //is this color's turn

          this.setState({ select: coord }, function() {
            this.setState({ isSelectingChess: false });
          });
        } else {
          //G02
          console.log("G02: cannot select opponent chess");
          //is the other color's turn
        }

        // A. selecting chess, have piece

        // const prevSelectedSq = this.state.selectedSquare;
        // var unselectCoord;
        // if (prevSelectedSq == null) {
        //   //no need to unselect
        //   unselectCoord = null;
        // } else {
        //   //unselect prev sq
        //   unselectCoord = prevSelectedSq.state.coord;
        // }
        // console.log("sq.state.coord: " + JSON.stringify(sq.state.coord));
        // //selected a square containaing a piece
        // this.setState({ selectedSquare: sq }, function() {
        //   this.state.isSelectingChess = false;
        //   this.state.unselect = unselectCoord;
        // });
      } else {
        //G03
        console.log("G03: cannot select empty square");
        // B. selecting chess, not have piece
        //selecting an empty square
        // console.log("sq.state.coord: " + JSON.stringify(sq.state.coord));
        // console.log("Cannot select square because it is empty");
      }
    } else {
      const piece = getPieceByCoord(coord, squares);
      // const pieceColor = piece.player;

      if (piece !== null && piece.player === turn) {
        //G04: selecting another chess
        console.log("G04: selecting another chess");
        this.setState({ select: coord }, function() {
          this.setState({ isSelectingChess: false });
        });
      } else {
        const src = this.state.select;
        const srcPeice = getPieceByCoord(src, squares);
        const srcChessType = srcPeice.chessType;

        const dest = sq.state.coord;

        const isMovePossible = getMovePossibleByChessType(
          src,
          dest,
          srcPeice,
          squares
        );

        if (isMovePossible) {
          if (this.squreHavePiece(sq)) {
            //G06: eating opponent chess
            console.log("G06: eating opponent chess");
            const outcome = getMoveOutcome(srcPeice, src, dest, squares);

            const destPiece = getPieceByCoord(dest, squares);
            if (destPiece != null) {
              // TODO: store fallen piece
            }

            this.setState(
              {
                squares: outcome,
                select: null
              },
              function() {
                this.setState({ isSelectingChess: true });
                this.toggleTurn();
              }
            );
          } else {
            //G05: moving chess to empty square
            console.log("G05: moving chess to empty square");
            const outcome = getMoveOutcome(srcPeice, src, dest, squares);
            this.setState(
              {
                squares: outcome,
                select: null
              },
              function() {
                this.setState({ isSelectingChess: true });
                this.toggleTurn();
              }
            );
          }
        } else {
          //G08: cannot make such move
          console.log("G08: cannot make such move");
          this.setState({ isSelectingChess: false });
        }
      }

      //determine if is a valid move
      // const chessType = this.state.selectedSquare.state.piece;
      // const src = this.state.selectedSquare.state.coord;
      // const dest = sq.state.coord;
      // console.log(
      //   "chessType: " + chessType + ", src: " + src + ", dest:" + dest
      // );
      // const isMovePossible = getMovePossibleByChessType(
      //   src,
      //   dest,
      //   chessType,
      //   squares
      // );
      // console.log("isMovePossible: " + isMovePossible);
      // if (isMovePossible) {
      //   // C. making move, valid move
      //   //if move possible
      //   const srcPiece = getPieceByCoord(src, squares);
      //   const destPiece = getPieceByCoord(dest, squares);
      //   if (destPiece != null) {
      //     // TODO: store fallen piece
      //   }
      //   // console.log("this.state.squares: " + this.state.squares);
      //   //this.state.squares: 1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      //   // var newSquares = JSON.parse(JSON.stringify(this.state.squares));
      //   // newSquares[src.y][src.x] = null;
      //   // newSquares[dest.y][dest.x] = chessType;
      //   // console.log("this.state.squares: " + this.state.squares);
      //   // this.state.squares: ,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      //   const outcome = getMoveOutcome(chessType, src, dest, squares);
      //   this.setState(
      //     {
      //       squares: outcome
      //     },
      //     function() {
      //       this.setState({ isSelectingChess: true });
      //     }
      //   );
      //   } else {
      //     // D. making move, invalid move
      //     //if move not possible
      //     this.setState({ isSelectingChess: false });
      //   }
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
        <div className="chess-container">
          <div className="board-row">
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />

            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
          </div>
        </div>
        <div className="game">
          <DisplayBoard />
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={sq => this.handleClick(sq)}
              unselect={this.state.unselect}
              select={this.state.select}
            />
          </div>
        </div>
        <div className="chess-container">
          <div className="board-row">
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />

            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
            <div className="chess-square" />
          </div>
        </div>
      </div>
    );
  }
}
