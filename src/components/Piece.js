import React from "react";
import "../index.css";
import { testNameToKey } from "jest-snapshot/build/utils";

export default class Piece extends React.Component {
  normalBGColor = "white";

  highlightedBGColor = "#cccccc";

  constructor(props) {
    super(props);

    this.state = { backgroundColor: this.normalBGColor };
  }

  render() {
    return (
      <div
        className="piece"
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={this.highlight}
      >
        {this.props.text}
      </div>
    );
  }

  highlight = () => {
    this.setState({ backgroundColor: this.highlightedBGColor });
  };

  unhighlight = () => {
    this.setState({ backgroundColor: this.normalBGColor });
  };
}
