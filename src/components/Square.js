import React from "react";
import "../index.css";
import Piece from "./Piece.js";
import King from "./King.js";
// import getChessType from "../helpers/getChessType";
import getComponentByChessType from "../helpers/getComponentByChessType";
import getPlayers from "../helpers/getPlayers";

export default class Sqaure extends React.Component {
  constructor(props) {
    super(props);
    const piece = this.props.piece;
    console.log("Square this.props.piece: " + this.props.piece);
    // console.log(
    //   "ChessType.getChessType().King: " + ChessType.getChessType().King
    // );

    const coord = { x: this.props.x, y: this.props.y };

    this.state = {
      isSelected: false,
      piece: piece,
      backgroundColor: "none",
      borderColor: "yellow",
      coord: coord,
      highlight: this.props.highlight
    };

    // switch (piece) {
    //   case ChessType.getChessType().King:
    //     this.state = { piece: <King /> };
    //     break;
    //   default:
    //     this.state = { piece: null };
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.piece !== prevProps.piece) {
      this.setState({ piece: this.props.piece });
    }

    if (this.props.highlight !== prevProps.highlight) {
      this.setState({ highlight: this.props.highlight });
    }
  }

  render() {
    // console.log("this props: " + this.props);
    return (
      <button
        className="square"
        onClick={this.onClick}
        style={{
          backgroundColor: this.state.backgroundColor,
          borderColor: "transparent" //this.state.isSelected ? "black" : "white"
        }}
        // onFocus={this.onFocus}
      >
        {/* {this.state.hasPiece ? <Piece /> : null} */}
        {/* {this.state.piece} */}
        <div
          className={
            this.state.highlight
              ? this.state.piece.player === getPlayers().Red
                ? "highlight-piece-in-red"
                : "highlight-piece"
              : "unhighlight-square"
          }
        >
          {getComponentByChessType(this.state.piece)}
        </div>
      </button>
    );
  }

  // highlight() {
  //   this.setState({ backgroundColor: "#ffba5e" });
  // }

  // unhighlight() {
  //   this.setState({ backgroundColor: "#f9ead6" });
  // }

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

  hasPiece = () => {
    if (this.state.piece != null) {
      return true;
    } else {
      return false;
    }
  };

  onFocus = () => {
    console.log("this.hasPiece(): " + this.hasPiece());
    if (this.hasPiece()) {
      this.setState({ borderColor: "black" });
    }
  };

  select = () => {
    this.setState({ isSelected: true });
  };

  unselect = () => {
    this.setState({ isSelected: false });
  };

  // highlight() {
  //   this.setState({ borderColor: "black" });
  // }

  // unhighlight() {
  //   this.setState({ borderColor: "white" });
  // }
}
