// All code should be written in this file.
var playerOneMoveOneType;
var playerOneMoveTwoType;
var playerOneMoveThreeType;
var playerTwoMoveOneType;
var playerTwoMoveTwoType;
var playerTwoMoveThreeType;
var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;
var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  var moves = ['rock', 'paper', 'scissors'];
  var moveTypes = [moveOneType, moveTwoType, moveThreeType];
  var moveValues = [moveOneValue, moveTwoValue, moveThreeValue];

  for (var i = 0; i < moveTypes.length; i++) {
    if (moves.indexOf(moveTypes[i]) === -1) {
      return undefined;
    }
  }

  for (var i = 0; i< moveValues.length; i++) {
    if (!moveValues[i]) {
      return undefined;
    }
    if (moveValues[i] < 1 || moveValues[i] > 99) {
      return undefined;
    }
  }

  if ( moveValues.reduce((a,b) => a + b, 0) > 99) {
    return undefined;
  }

  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

function winner(playerOneMove, playerOneMoveValue, playerTwoMove, playerTwoMoveValue) {
  var rules = {'rock': 'paper', 'scissors': 'rock', 'paper': 'scissors'};

  if (rules[playerOneMove] === playerTwoMove) {
    return 'Player Two';
  } else if (rules[playerTwoMove] === playerOneMove) {
      return 'Player One';
  } else {
    if ( playerOneMoveValue > playerTwoMoveValue ) {
      return 'Player One';
    } else if (playerTwoMoveValue > playerOneMoveValue) {
      return 'Player Two';
    } else if (playerOneMoveValue === playerTwoMoveValue ) {
      return 'Tie';
    }
  }

}

function getRoundWinner(round) {
  if (round === 1) {
    return winner(playerOneMoveOneType, playerOneMoveOneValue,
      playerTwoMoveOneType, playerTwoMoveOneValue);
  } else if (round === 2) {
    return winner(playerOneMoveTwoType, playerOneMoveTwoValue,
      playerTwoMoveTwoType, playerTwoMoveTwoValue);
  } else if (round === 3) {
    return winner(playerOneMoveThreeType, playerOneMoveThreeValue,
      playerTwoMoveThreeType, playerTwoMoveThreeValue);
  }
}
