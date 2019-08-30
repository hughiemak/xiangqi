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
import ChessHolder from "./ChessHolder.js";
import getOutcomeAfterAddPiece from "../helpers/getOutcomeAfterAddPiece";
import getChessType from "../helpers/getChessType";
import getChess from "../helpers/getChess";
import getOutcomeAfterRemovePiece from "../helpers/getOutcomeAfterRemovePiece";
import getDefaultHolderContent from "../helpers/getDefaultHolderContent";
import getEmptyHolderContent from "../helpers/getEmptyHolderContent";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initChessBoard(true),
      isSelectingChess: true, //false when placing chess to destination
      selectedSquare: null, //a square
      unselect: null, //a coordinate
      select: null, //a coordinate
      turn: getPlayers().Red,
      selectedHolderSqData: null,
      // holderContent: this.holderContent
      redHolderContent: getEmptyHolderContent(),
      blackHolderContent: getEmptyHolderContent()
    };
  }

  componentDidMount() {
    this.enterAutoInitMode();
  }

  enterAutoInitMode = () => {
    const squares = initChessBoard(true);
    this.redHolderContent = getEmptyHolderContent();
    this.blackHolderContent = getEmptyHolderContent();

    this.setState({
      squares: squares,
      redHolderContent: this.redHolderContent,
      blackHolderContent: this.blackHolderContent,
      turn: getPlayers().Red
    });
  };

  enterCustomMode = () => {
    const squares = initChessBoard(false);
    this.redHolderContent = getDefaultHolderContent().Red;
    this.blackHolderContent = getDefaultHolderContent().Black;

    this.setState({
      squares: squares,
      redHolderContent: this.redHolderContent,
      blackHolderContent: this.blackHolderContent,
      turn: getPlayers().Red
    });
  };

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

    console.log("sq: " + JSON.stringify(sq.state));

    var squares = this.state.squares;

    const coord = sq.state.coord;

    const turn = this.state.turn;

    console.log(
      "this.state.selectedHolderSqData: " + this.state.selectedHolderSqData
    );
    console.log("!this.squreHavePiece(sq): " + !this.squreHavePiece(sq));

    if (this.state.selectedHolderSqData != null && !this.squreHavePiece(sq)) {
      //place piece
      console.log("Place piece");
      const outcome = getOutcomeAfterAddPiece(
        this.state.selectedHolderSqData,
        coord,
        squares
      );

      this.addPieceToBoard(this.state.selectedHolderSqData, outcome);

      // this.removePieceFromHolder(this.state.selectedHolderSqData);

      // this.setState({ squares: outcome, selectedHolderSqData: null });
    } else {
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
                const holderPosition = destPiece.holderPosition;
                const player = destPiece.player;

                if (player == getPlayers().Black) {
                  // modify blackholdercontent
                  this.blackHolderContent[holderPosition.y][
                    holderPosition.x
                  ] = destPiece;

                  this.setState({
                    blackHolderContent: this.blackHolderContent
                  });
                } else {
                  this.redHolderContent[holderPosition.y][
                    holderPosition.x
                  ] = destPiece;

                  this.setState({ redHolderContent: this.redHolderContent });
                }
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
    }

    // if (sq.state.piece === null) {
    //   //no piece in the sq
    //   return;
    // } else {
    //   // have piece in the sq
    // }
  }

  onChessHolderPieceSelected = selectedHolderSqData => {
    // console.log(
    //   "Game onChessHolderPieceSelected piece: " + JSON.stringify(piece)
    // );

    // const player = selectedHolderSqData.player;

    // const selectedCoord = this.state.select;

    // if (selectedCoord != null) {
    //   const selectedPiece = getPieceByCoord(selectedCoord, this.state.squares);
    //   if (
    //     selectedHolderSqData.holderContent[selectedHolderSqData.square.y][
    //       selectedHolderSqData.square.x
    //     ] != null ||
    //     player != selectedPiece.player
    //   ) {
    //     //holder sq has piece or is opposite player holder
    //     //select it
    //     this.setState({ selectedHolderSqData: selectedHolderSqData });
    //   } else {
    //     // holder sq is empty
    //     // put piece from board to holder
    //     const holderSq = selectedHolderSqData.square;
    //     const outcome = getOutcomeAfterRemovePiece(
    //       selectedCoord,
    //       this.state.squares
    //     );

    //     if (player == getPlayers().Black) {
    //       this.blackHolderContent[holderSq.y][holderSq.x] = selectedPiece;
    //       this.setState({
    //         squares: outcome,
    //         blackHolderContent: this.blackHolderContent,
    //         isSelectingChess: true
    //       });
    //     } else {
    //       this.redHolderContent[holderSq.y][holderSq.x] = selectedPiece;
    //       this.setState({
    //         squares: outcome,
    //         redHolderContent: this.redHolderContent,
    //         isSelectingChess: true
    //       });
    //     }
    //   }
    // } else {
    //pick the piece in holder
    var holderSqHasPiece;

    if (
      selectedHolderSqData.holderContent.length == 0 ||
      selectedHolderSqData.holderContent.length == null
    ) {
      holderSqHasPiece = false;
    } else if (
      selectedHolderSqData.holderContent[selectedHolderSqData.square.y][
        selectedHolderSqData.square.x
      ] == null
    ) {
      holderSqHasPiece = false;
    } else {
      holderSqHasPiece = true;
    }

    //   if (selectedHolderSqData.holderContent.length == 0 || selectedHolderSqData.holderContent.length == null){
    //     c
    //   }else if (selectedHolderSqData.holderContent[selectedHolderSqData.square.y][
    //     selectedHolderSqData.square.x
    //   ] == null){
    //   holderSqHasPiece = false
    // }else{
    //     holderSqHasPiece = true
    //   }

    if (holderSqHasPiece) {
      this.setState({ selectedHolderSqData: selectedHolderSqData });
    }

    // }
  };

  removePieceFromHolder(selectedHolderSqData) {
    const x = selectedHolderSqData.square.x;
    const y = selectedHolderSqData.square.y;
  }

  onAutoStartBtnClicked = () => {
    this.enterAutoInitMode();
  };

  onCustomizeBtnClicked = () => {
    this.enterCustomMode();
  };

  render() {
    // console.log("this.state.squares: " + this.state.squares);
    return (
      <div>
        <div className="btns-container">
          {/* <div className="center"> */}
          <button className="btn" onClick={this.onAutoStartBtnClicked}>
            Auto Start
          </button>
          <button className="btn" onClick={this.onCustomizeBtnClicked}>
            Customize
          </button>
          {/* </div> */}
        </div>

        <ChessHolder
          onPieceSelected={this.onChessHolderPieceSelected}
          player={getPlayers().Black}
          holderContent={this.state.blackHolderContent}
          selected={
            this.state.selectedHolderSqData != null
              ? this.state.selectedHolderSqData.player == getPlayers().Black
                ? this.state.selectedHolderSqData.square
                : null
              : null
          }
        />
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
        <ChessHolder
          onPieceSelected={this.onChessHolderPieceSelected}
          player={getPlayers().Red}
          holderContent={this.state.redHolderContent}
          selected={
            this.state.selectedHolderSqData != null
              ? this.state.selectedHolderSqData.player == getPlayers().Red
                ? this.state.selectedHolderSqData.square
                : null
              : null
          }
        />
      </div>
    );
  }

  // holderContent = {
  //   Black: [
  //     [
  //       getChess(getChessType().Chariot, getPlayers().Black),
  //       getChess(getChessType().Horse, getPlayers().Black),
  //       getChess(getChessType().Cannon, getPlayers().Black),
  //       getChess(getChessType().Elephant, getPlayers().Black),
  //       getChess(getChessType().Advisor, getPlayers().Black),
  //       getChess(getChessType().King, getPlayers().Black),
  //       getChess(getChessType().Advisor, getPlayers().Black),
  //       getChess(getChessType().Elephant, getPlayers().Black)
  //     ],
  //     [
  //       getChess(getChessType().Chariot, getPlayers().Black),
  //       getChess(getChessType().Horse, getPlayers().Black),
  //       getChess(getChessType().Cannon, getPlayers().Black),
  //       getChess(getChessType().Soldier, getPlayers().Black),
  //       getChess(getChessType().Soldier, getPlayers().Black),
  //       getChess(getChessType().Soldier, getPlayers().Black),
  //       getChess(getChessType().Soldier, getPlayers().Black),
  //       getChess(getChessType().Soldier, getPlayers().Black)
  //     ]
  //   ],
  //   Red: [
  //     [
  //       getChess(getChessType().Chariot, getPlayers().Red),
  //       getChess(getChessType().Horse, getPlayers().Red),
  //       getChess(getChessType().Cannon, getPlayers().Red),
  //       getChess(getChessType().Soldier, getPlayers().Red),
  //       getChess(getChessType().Soldier, getPlayers().Red),
  //       getChess(getChessType().Soldier, getPlayers().Red),
  //       getChess(getChessType().Soldier, getPlayers().Red),
  //       getChess(getChessType().Soldier, getPlayers().Red)
  //     ],
  //     [
  //       getChess(getChessType().Chariot, getPlayers().Red),
  //       getChess(getChessType().Horse, getPlayers().Red),
  //       getChess(getChessType().Cannon, getPlayers().Red),
  //       getChess(getChessType().Elephant, getPlayers().Red),
  //       getChess(getChessType().Advisor, getPlayers().Red),
  //       getChess(getChessType().King, getPlayers().Red),
  //       getChess(getChessType().Advisor, getPlayers().Red),
  //       getChess(getChessType().Elephant, getPlayers().Red)
  //     ]
  //   ]
  // };

  blackHolderContent = getDefaultHolderContent().Black;

  redHolderContent = getDefaultHolderContent().Red;

  addPieceToBoard(holderSqData, outcome) {
    const sq = holderSqData.square;

    const player = holderSqData.player;

    if (player == getPlayers().Black) {
      this.blackHolderContent[sq.y][sq.x] = null;
      this.setState({
        blackHolderContent: this.blackHolderContent,
        squares: outcome,
        selectedHolderSqData: null,
        isSelectingChess: true
      });
    } else {
      this.redHolderContent[sq.y][sq.x] = null;
      this.setState({
        redHolderContent: this.redHolderContent,
        squares: outcome,
        selectedHolderSqData: null,
        isSelectingChess: true
      });
    }
  }

  removePieceFromBoardToHolder() {}

  // removePieceFromHolder(holderSqData) {
  //   const sq = holderSqData.square;

  //   const player = holderSqData.player;

  //   console.log(
  //     "Game removePieceFromHolder player: " +
  //       player +
  //       "sq: " +
  //       JSON.stringify(sq)
  //   );

  //   if (player == getPlayers().Black) {
  //     this.blackHolderContent[sq.y][sq.x] = null;
  //     this.setState({
  //       blackHolderContent: this.blackHolderContent
  //     });
  //   } else {
  //     this.redHolderContent[sq.y][sq.x] = null;
  //     this.setState({
  //       redHolderContent: this.redHolderContent
  //     });
  //   }

  //   // if (player == getPlayers().Black) {
  //   //   this.holderContent.Black[sq.y][sq.x] = null;
  //   //   console.log(
  //   //     "Game removePieceFromHolder this.holderContent.Black[sq.y][sq.x]: " +
  //   //       JSON.stringify(this.holderContent.Black[sq.y][sq.x])
  //   //   );
  //   // } else {
  //   //   this.holderContent.Red[sq.y][sq.x] = null;
  //   //   console.log(
  //   //     "Game removePieceFromHolder this.holderContent.Red[sq.y][sq.x]: " +
  //   //       JSON.stringify(this.holderContent.Red[sq.y][sq.x])
  //   //   );
  //   // }

  //   // console.log(
  //   //   "Game removePieceFromHolder holderContent: " +
  //   //     JSON.stringify(this.holderContent)
  //   // );

  //   // var newHolderContent = JSON.parse(JSON.stringify(this.holderContent));
  // }
}
