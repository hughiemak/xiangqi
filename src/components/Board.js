import React from "react";
import "../index.css";
import Square from "./Square.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this.props.squares: " + this.props.squares);
  }
  renderSquare(key, x, y) {
    console.log("x: " + x + " y: " + y);
    console.log(
      "this.props.squares[y][x]: " + JSON.stringify(this.props.squares[y][x])
    );
    return (
      <Square
        piece={this.props.squares[y][x]}
        key={key}
        x={x}
        y={y}
        onClick={sq => this.onClick(sq)}
      />
    );
  }

  onClick(sq) {
    this.props.onClick(sq);
  }

  render() {
    const board = [];
    for (let y = 9; y >= 0; y--) {
      const squareRows = [];
      for (let x = 0; x < 9; x++) {
        const yS = y.toString();
        const xS = x.toString();
        const key = yS + xS;
        squareRows.push(this.renderSquare(key, x, y));
      }
      board.push(
        <div className="board-row" key={y}>
          {squareRows}
        </div>
      );
    }
    return <div>{board}</div>;
  }
}
