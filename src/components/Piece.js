import React from "react";
import "../index.css";

export default class Piece extends React.Component {
  constructor(props) {
    super(props);
    console.log("yo: " + this.props);
  }

  render() {
    return <div className="piece">帥</div>;
  }
}
