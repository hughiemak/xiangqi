import React from "react";
import "../index.css";
import Piece from "./Piece.js";
import King from "./King.js";
import getChessType from "../helpers/getChessType";
import getComponentByChessType from "../helpers/getComponentByChessType";

export default class Sqaure extends React.Component {
  constructor(props) {
    super(props);
    const piece = this.props.piece;
    // console.log("Square this.props.piece: " + this.props.piece);
    // console.log(
    //   "ChessType.getChessType().King: " + ChessType.getChessType().King
    // );

    this.state = { piece: piece, backgroundColor: "#f9ead6" };

    // switch (piece) {
    //   case ChessType.getChessType().King:
    //     this.state = { piece: <King /> };
    //     break;
    //   default:
    //     this.state = { piece: null };
    // }
  }

  render() {
    // console.log("this props: " + this.props);
    return (
      <button
        className="square"
        onClick={this.onClick}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        {/* {this.state.hasPiece ? <Piece /> : null} */}
        {/* {this.state.piece} */}
        {getComponentByChessType(this.state.piece)}
      </button>
    );
  }

  highlight() {
    this.setState({ backgroundColor: "#ffba5e" });
  }

  unhighlight() {
    this.setState({ backgroundColor: "#f9ead6" });
  }

  onClick = () => {
    const x = this.props.x;
    const y = this.props.y;
    // console.log("x: " + x + ", y: " + y);

    this.props.onClick(this);

    // this.setKing(function() {
    //   //   console.log("this.hasPiece(): " + this.hasPiece());
    //   if (!this.hasPiece()) {
    //     console.log("This sq. has no Piece");
    //   } else {
    //     console.log("This sq. has Piece");
    //   }
    // });
  };

  setKing(fn) {
    this.setState({ piece: <King /> }, fn);
  }

  hasPiece() {
    if (this.state.piece != null) {
      return true;
    } else {
      return false;
    }
  }
}
