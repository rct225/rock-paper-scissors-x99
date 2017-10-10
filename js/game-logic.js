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
  if (!playerOneMove || !playerOneMoveValue || !playerTwoMove || !playerTwoMoveValue) {
    return null;
  }

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
  } else {
    return null;
  }
}

function getGameWinner() {
  var results = [1,2,3].map( round => getRoundWinner(round));
  var playerOne = 0;
  var playerTwo = 0;
  for (var i = 0; i < results.length; i++) {
    if (results[i] === 'Player One') {
      playerOne++;
    } else if (results[i] === 'Player Two') {
      playerTwo++
    } else if (results[i] === null) {
      return null;
    }
  }
  if (playerOne > playerTwo) {
    return 'Player One';
  } else if (playerTwo > playerOne) {
    return 'Player Two';
  } else if (playerOne == playerTwo) {
    return 'Tie';
  }
}

function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array;
}

function generateValues() {
  var max = 99;
  var r1 = randomBetweewn(1, max-2);
  var r2 = randomBetweewn(1, max-1-r1);
  var r3 = max - r1 -r2;
  return [r1,r2,r3];
}

function randomBetweewn(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setComputerMoves() {
  var moves = ['rock', 'paper', 'scissors'];
  moves = shuffle(moves);
  playerTwoMoveOneType = moves[0];
  playerTwoMoveTwoType = moves[1];
  playerTwoMoveThreeType = moves[2];
  var values = generateValues();
  playerTwoMoveOneValue = values[0];
  playerTwoMoveTwoValue = values[1];
  playerTwoMoveThreeValue = values[2];

}
