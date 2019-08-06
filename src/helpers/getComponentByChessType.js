import React from "react";
import King from "../components/King";
import getChessType from "../helpers/getChessType";

export default function getChessComponent(type) {
  switch (type) {
    case getChessType().King:
      //   console.log("HAVE KING!");
      return <King />;
      break;
    default:
      return null;
  }
}
