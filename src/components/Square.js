import React from "react";
import "../index.css";

// export default function Square(props) {
//   return <button className={styles.Square} />;
// }

export default class Sqaure extends React.Component {
  render() {
    // console.log("this props: " + this.props);
    return <button className="square" onClick={this.onClick} />;
  }

  onClick = () => {
    const x = this.props.x;
    const y = this.props.y;
    // console.log("x: " + x + ", y: " + y);

    this.props.onClick({ x, y });
  };
}
