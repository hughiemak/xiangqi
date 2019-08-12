import React from "react";
import "../index.css";
import { testNameToKey } from "jest-snapshot/build/utils";

export default class Piece extends React.Component {
  normalBGColor = "white";

  highlightedBGColor = "#cccccc";

  constructor(props) {
    super(props);

    this.state = { backgroundColor: this.normalBGColor, highlight: false };
  }

  render() {
    return (
      <div
        className={
          this.state.highlight ? "highlight-piece" : "unhighlight-square"
        }
      >
        <div
          className="piece"
          style={{
            backgroundColor: this.state.backgroundColor,
            borderColor: this.props.player,
            color: this.props.player
          }}
          // onClick={this.highlight}
        >
          {this.props.text}
        </div>
      </div>
    );
  }

  highlight = () => {
    this.setState({ highlight: true });
  };

  unhighlight = () => {
    this.setState({ highlight: false });
  };
}
