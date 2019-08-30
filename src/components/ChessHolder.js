import React from "react";
import "../index.css";
import ChessSquare from "./ChessSquare";
import getChessType from "../helpers/getChessType";
import getChess from "../helpers/getChess";
import getPlayers from "../helpers/getPlayers";

export default class ChessHolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.player,
      holderContent: this.props.holderContent
    };
  }

  componentDidUpdate(prevProps) {
    // console.log("componentDidUpdate");
    // console.log(
    //   "this.props.holderContent: " + JSON.stringify(this.props.holderContent)
    // );
    // console.log(
    //   "prevProps.holderContent: " + JSON.stringify(prevProps.holderContent)
    // );
    if (this.props.holderContent !== prevProps.holderContent) {
      //   console.log("ChessHolder componentDidUpdate");
      this.setState({ holderContent: this.props.holderContent });
    }
  }

  //   defaultContent =
  //     this.props.player == getPlayers().Black
  //       ? [
  //           [
  //             getChess(getChessType().Chariot, getPlayers().Black),
  //             getChess(getChessType().Horse, getPlayers().Black),
  //             getChess(getChessType().Cannon, getPlayers().Black),
  //             getChess(getChessType().Elephant, getPlayers().Black),
  //             getChess(getChessType().Advisor, getPlayers().Black),
  //             getChess(getChessType().King, getPlayers().Black),
  //             getChess(getChessType().Advisor, getPlayers().Black),
  //             getChess(getChessType().Elephant, getPlayers().Black)
  //           ],
  //           [
  //             getChess(getChessType().Chariot, getPlayers().Black),
  //             getChess(getChessType().Horse, getPlayers().Black),
  //             getChess(getChessType().Cannon, getPlayers().Black),
  //             getChess(getChessType().Soldier, getPlayers().Black),
  //             getChess(getChessType().Soldier, getPlayers().Black),
  //             getChess(getChessType().Soldier, getPlayers().Black),
  //             getChess(getChessType().Soldier, getPlayers().Black),
  //             getChess(getChessType().Soldier, getPlayers().Black)
  //           ]
  //         ]
  //       : [
  //   [
  //     getChess(getChessType().Chariot, getPlayers().Red),
  //     getChess(getChessType().Horse, getPlayers().Red),
  //     getChess(getChessType().Cannon, getPlayers().Red),
  //     getChess(getChessType().Soldier, getPlayers().Red),
  //     getChess(getChessType().Soldier, getPlayers().Red),
  //     getChess(getChessType().Soldier, getPlayers().Red),
  //     getChess(getChessType().Soldier, getPlayers().Red),
  //     getChess(getChessType().Soldier, getPlayers().Red)
  //   ],
  //   [
  //     getChess(getChessType().Chariot, getPlayers().Red),
  //     getChess(getChessType().Horse, getPlayers().Red),
  //     getChess(getChessType().Cannon, getPlayers().Red),
  //     getChess(getChessType().Elephant, getPlayers().Red),
  //     getChess(getChessType().Advisor, getPlayers().Red),
  //     getChess(getChessType().King, getPlayers().Red),
  //     getChess(getChessType().Advisor, getPlayers().Red),
  //     getChess(getChessType().Elephant, getPlayers().Red)
  //   ]
  // ];

  onSelect = sqData => {
    // console.log("selecting square: " + square);
    this.onPieceSelected(sqData);
  };

  generateRow(y) {
    const row = [];
    for (let x = 0; x <= 7; x++) {
      const yS = y.toString();
      const xS = x.toString();
      const key = yS + xS;
      const square = { x: x, y: y };
      //   console.log(square);
      row.push(
        <ChessSquare
          key={key}
          id={key}
          square={square}
          onSelect={this.onSelect}
          holderContent={this.state.holderContent}
          player={this.state.player}
        />
      );
    }
    return row;
  }

  generateRows() {
    return [this.generateRow(0), this.generateRow(1)];
  }

  render() {
    console.log("ChessHolder render()");
    return (
      <div className="chess-parent-container">
        <div className="chess-container">
          <div className="board-row">{this.generateRows()}</div>
        </div>
        <button onClick={this.test}>Test</button>
      </div>
    );
  }

  test = () => {
    // console.log("test");
    // let copy = JSON.parse(JSON.stringify(this.state.holderContent));
    // copy[0][0] = null;

    this.setState({ holderContent: null });
  };

  onPieceSelected = sqData => {
    // console.log("ChessHolder onPieceSelected");
    this.props.onPieceSelected(sqData);
  };

  //   addPieceToHolder = () => {
  //     console.log("ChessHolder addPieceToHolder");
  //   };

  removePiece = data => {
    // data.square
  };
}
