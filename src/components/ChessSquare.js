import React from "react";
import "../index.css";
import getComponentByChessType from "../helpers/getComponentByChessType";
import getChessType from "../helpers/getChessType";
import getChess from "../helpers/getChess";
import getPlayers from "../helpers/getPlayers";

export default class ChessSquare extends React.Component {
  constructor(props) {
    super(props);

    console.log(
      "this.props.holderContent: " + JSON.stringify(this.props.holderContent)
    );

    this.state = {
      test: "ChessHolder: test",
      id: this.props.id,
      //   square: this.props.square,
      //   piece: this.props.piece,
      data: {
        square: this.props.square,
        // piece: this.props.holderContent[this.props.square.y][
        //   this.props.square.x
        // ],
        player: this.props.player,
        holderContent: this.props.holderContent
      }
    };
  }

  componentDidUpdate(prevProps) {
    // console.log("componentDidUpdate");
    //   console.log("this.props.piece: " + JSON.stringify(this.props.piece));
    //   console.log("prevProps.piece: " + JSON.stringify(prevProps.piece));
    if (this.props.holderContent !== prevProps.holderContent) {
      console.log("ChessHolder componentDidUpdate");
      //   this.setState({ holderContent: this.props.holderContent });
      this.setState({
        data: { ...this.state.data, holderContent: this.props.holderContent }
      });
    }
  }

  handleClick = () => {
    // this.setState(this.setState({ data: { ...this.state.data, piece: null } }));
    // return;
    console.log(this.state.id);
    // console.log(this.state.data.player);
    // console.log(this.state.square);
    this.props.onSelect(this.state.data);
  };

  render() {
    var piece;
    if (this.state.data.holderContent != null) {
      piece = this.state.data.holderContent[this.state.data.square.y][
        this.state.data.square.x
      ];
    } else {
      piece = null;
    }

    // console.log(
    //   "this.state.data: " +
    //     JSON.stringify(
    //       this.state.data.holderContent[this.state.data.square.y][
    //         this.state.data.square.x
    //       ]
    //     )
    // );
    return (
      <div className="chess-square" onClick={this.handleClick}>
        {getComponentByChessType(piece)}
      </div>
    );
  }

  //   removePiece = () => {
  //       this.setState({data: {...this.state.data, piece: null}})
  //   }
}

// Black
// 00 01 02 03 04 05 06 07
// ch h  c  e  g  k  g  e
// 10 11 12 13 14 15 16 17
// ch h  c  s  s  s  s  s

// Red
// 00 01 02 03 04 05 06 07
// ch h  c  s  s  s  s  s
// 10 11 12 13 14 15 16 17
// ch h  c  e  g  k  g  e
