import React from "react";
import "../index.css";
import Square from "./Square.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this.props.squares: " + this.props.squares);
    this.state = {
      squares: this.props.squares
    };
  }

  componentDidUpdate(prevProps) {
    // console.log("componentDidUpdate");
    // console.log("this.props.squares: " + this.props.squares);
    // console.log("prevProps.squares: " + prevProps.squares);
    if (this.props.squares !== prevProps.squares) {
      // console.log("Board setState");
      this.setState({ squares: this.props.squares });
    }
  }

  renderSquare(key, x, y) {
    // console.log("x: " + x + " y: " + y);
    // console.log(
    //   "this.props.squares[y][x]: " + JSON.stringify(this.props.squares[y][x])
    // );
    return (
      <Square
        piece={this.state.squares[y][x]}
        key={key}
        x={x}
        y={y}
        onClick={sq => this.onClick(sq)}
        setClick={click => (this.clickChild = click)}
      />
    );
  }

  onClick(sq) {
    this.props.onClick(sq);
  }

  render() {
    // console.log("Board render(), this.state.squares: " + this.state.squares);
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
