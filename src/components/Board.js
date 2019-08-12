import React from "react";
import "../index.css";
import Square from "./Square.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this.props.squares: " + this.props.squares);
    this.state = {
      squares: this.props.squares,
      unselect: this.props.unselect,
      select: this.props.select
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

    if (this.props.unselect !== prevProps.unselect) {
      this.setState({ unselect: this.props.unselect });
    }

    if (this.props.select !== prevProps.select) {
      this.setState({ select: this.props.select });
    }
  }

  renderSquare(key, x, y, selected) {
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
        highlight={selected}
      />
    );
  }

  onClick(sq) {
    this.props.onClick(sq);
  }

  render() {
    // console.log("select: " + JSON.stringify(this.state.select));
    // console.log("Board render(), this.state.squares: " + this.state.squares);
    const board = [];
    for (let y = 9; y >= 0; y--) {
      const squareRows = [];
      for (let x = 0; x < 9; x++) {
        const yS = y.toString();
        const xS = x.toString();
        const key = yS + xS;

        const select = this.state.select;
        var selected;
        if (select != null) {
          if (select.x == x && select.y == y) {
            selected = true;
          } else {
            selected = false;
          }
        } else {
          selected = false;
        }

        squareRows.push(this.renderSquare(key, x, y, selected));
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
