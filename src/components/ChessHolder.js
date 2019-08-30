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
      holderContent: this.props.holderContent,
      selected: this.props.selected
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

    if (this.props.selected !== prevProps.selected) {
      this.setState({ selected: this.props.selected });
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

  generateRow(y, selected) {
    const row = [];
    for (let x = 0; x <= 7; x++) {
      const yS = y.toString();
      const xS = x.toString();
      const key = yS + xS;
      const square = { x: x, y: y };
      //   console.log(square);

      var highlight = false;
      if (selected != null && selected.y == y && selected.x == x) {
        highlight = true;
      }
      row.push(
        <ChessSquare
          key={key}
          id={key}
          square={square}
          onSelect={this.onSelect}
          holderContent={this.state.holderContent}
          player={this.state.player}
          highlight={highlight}
        />
      );
    }
    return row;
  }

  generateRows(selected) {
    return [this.generateRow(0, selected), this.generateRow(1, selected)];
  }

  render() {
    console.log("ChessHolder render()");
    return (
      <div className="chess-parent-container">
        <div className="chess-container">
          <div className="board-row">
            {this.generateRows(this.state.selected)}
          </div>
        </div>
        {/* <button onClick={this.test}>Test</button> */}
      </div>
    );
  }

  test = () => {
    // console.log("test");
    if (this.state.holderContent != null) {
      this.state.holderContent[0][0] = null;

      //   let copy = JSON.parse(JSON.stringify(this.state.holderContent));
      //   copy[0][0] = null;

      this.setState({ holderContent: this.state.holderContent });
    }
  };

  removePieceAt(sq) {
    let copy = JSON.parse(JSON.stringify(this.state.holderContent));
    copy[sq.y][sq.x] = null;

    this.setState({ holderContent: copy });
  }

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
