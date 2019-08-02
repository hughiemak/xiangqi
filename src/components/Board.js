import React from "react";
import "../index.css";
import Square from "./Square.js";

export default class Board extends React.Component {
  constructor() {
    super();
  }

  renderSquare(key, x, y) {
    return (
      <Square key={key} x={x} y={y} onClick={coord => this.onClick(coord)} />
    );
  }

  onClick(coord) {
    this.props.onClick(coord);
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
