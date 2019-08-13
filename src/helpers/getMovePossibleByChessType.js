import getChessType from "../helpers/getChessType";
import getPlayers from "../helpers/getPlayers";

export default function isMovePossible(src, dest, piece, squares) {
  // //is attempting to place the selected chess
  // if (this.squreHavePiece(sq)) {
  //   //have a piece in square
  //   //if is opponent chess
  //   //eat
  //   //else
  //   //cannot place
  // } else {
  //   //empty square
  //   //move selected chess from src to destination

  //   const src = this.state.selectedSquare;
  // }

  const xDiff = getDiffFromSrcDest(src, dest).xDiff;
  const yDiff = getDiffFromSrcDest(src, dest).yDiff;

  if (xDiff === 0 && yDiff === 0) {
    return false;
  }

  switch (piece.chessType) {
    case getChessType().King:
      if (piece.player == getPlayers().Red) {
        if (
          (dest.x == 3 || dest.x == 4 || dest.x == 5) &&
          (dest.y == 0 || dest.y == 1 || dest.y == 2)
        ) {
          return (xDiff === 0 || xDiff === 1) && (yDiff === 0 || yDiff === 1);
        } else {
          return false;
        }
      } else {
        if (
          (dest.x == 3 || dest.x == 4 || dest.x == 5) &&
          (dest.y == 7 || dest.y == 8 || dest.y == 9)
        ) {
          return (xDiff === 0 && yDiff === 1) || (xDiff === 1 && yDiff === 0);
        } else {
          return false;
        }
      }
      break;

    case getChessType().Advisor:
      if (piece.player == getPlayers().Red) {
        if (
          (dest.x == 3 || dest.x == 4 || dest.x == 5) &&
          (dest.y == 0 || dest.y == 1 || dest.y == 2)
        ) {
          return xDiff === 1 && yDiff === 1;
        } else {
          return false;
        }
      } else {
        if (
          (dest.x == 3 || dest.x == 4 || dest.x == 5) &&
          (dest.y == 7 || dest.y == 8 || dest.y == 9)
        ) {
          return xDiff === 1 && yDiff === 1;
        } else {
          return false;
        }
      }
      break;

    case getChessType().Elephant:
      if (piece.player == getPlayers().Red) {
        if (
          dest.y == 0 ||
          dest.y == 1 ||
          dest.y == 2 ||
          dest.y == 3 ||
          dest.y == 4
        ) {
          const direction = getDirectionFromSrcDest(src, dest);

          const checkSpot =
            squares[src.y + direction.yDir][src.x + direction.xDir];

          if (checkSpot == null) {
            return xDiff === 2 && yDiff === 2;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        if (
          dest.y == 5 ||
          dest.y == 6 ||
          dest.y == 7 ||
          dest.y == 8 ||
          dest.y == 9
        ) {
          const direction = getDirectionFromSrcDest(src, dest);

          const checkSpot =
            squares[src.y + direction.yDir][src.x + direction.xDir];

          if (checkSpot == null) {
            return xDiff === 2 && yDiff === 2;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }

      break;

    case getChessType().Chariot:
      if (xDiff === 0 || yDiff === 0) {
        if (hasPieceBetween(src, dest, squares)) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
      break;

    case getChessType().Soldier:
      if (piece.player == getPlayers().Red) {
        if (src.y <= 4) {
          //not yet cross river
          if (dest.y - src.y === 1 && xDiff === 0) {
            return true;
          } else {
            return false;
          }
        } else {
          //crossed river
          if (!(xDiff === 1 && yDiff === 1) && !(dest.y - src.y === -1)) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        if (src.y > 4) {
          //not yet cross river
          if (dest.y - src.y === -1 && xDiff === 0) {
            return true;
          } else {
            return false;
          }
        } else {
          //crossed river
          if (!(xDiff === 1 && yDiff === 1) && !(dest.y - src.y === 1)) {
            return true;
          } else {
            return false;
          }
        }
      }
      break;

    default:
  }
}

function hasPieceBetween(src, dest, squares) {
  if (getDiffFromSrcDest(src, dest).xDiff === 0) {
    // console.log("getDiffFromSrcDest.xDiff === 0");
    const x = src.x;
    //moving along y
    //src.y ... dest.y
    const yDirection = getDirectionFromSrcDest(src, dest).yDir;

    var hasPieceBetween = false;

    for (var i = src.y + yDirection; i != dest.y; i = i + yDirection) {
      console.log("hasPieceBetween i: " + i);
      const piece = squares[i][x];

      if (piece != null) {
        hasPieceBetween = true;
      }
    }

    return hasPieceBetween;
  } else if (getDiffFromSrcDest(src, dest).yDiff === 0) {
    //moving along x
    const y = src.y;
    const xDirection = getDirectionFromSrcDest(src, dest).xDir;
    var hasPieceBetween = false;

    for (var i = src.x + xDirection; i != dest.x; i = i + xDirection) {
      console.log("hasPieceBetween i: " + i);
      const piece = squares[y][i];

      if (piece != null) {
        hasPieceBetween = true;
      }
    }

    return hasPieceBetween;
  }
}

function getDiffFromSrcDest(src, dest) {
  const xDiff = Math.abs(dest.x - src.x);
  const yDiff = Math.abs(dest.y - src.y);

  return { xDiff: xDiff, yDiff: yDiff };
}

function getDirectionFromSrcDest(src, dest) {
  const yDir = Math.sign(dest.y - src.y);
  const xDir = Math.sign(dest.x - src.x);
  const direction = { xDir: xDir, yDir: yDir };
  return direction;
}
