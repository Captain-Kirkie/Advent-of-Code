// A = rock, B = Paper, C = Scissors
// col 1: what your apponent is going to play
// col 2: your response
// X=rock, Y=Paper, Z=scissors
/**
 * The winner of the whole tournament is the player with the highest score.
 * Your total score is the sum of your scores for each round.
 * The score for a single round is the score for the shape you selected
 * (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round
 * (0 if you lost, 3 if the round was a draw, and 6 if you won).
 */

const { readData } = require("../readData.js");

const actions = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors",
};
// rock 1, 2 paper, 3 scissors
const response = {
    A: { action: actions.Rock, score: null },
    B: { action: actions.Paper, score: null },
    C: { action: actions.Scissors, score: null },
};

const yourMove = {
    X: { action: actions.Rock, score: 1 },
    Y: { action: actions.Paper, score: 2 },
    Z: { action: actions.Scissors, score: 3 },
};

const result = {
    win: "win",
    lose: "lose",
    draw: "draw",
};

const resultVal = { win: 6, lose: 0, draw: 3 };

function rockPaperScissors(you, them) {
    // paper beats rock
    // rock beats scissors
    // scissors beats paper
    if (you == them) return result.draw; // if they are the same it is a draw

    if (you === actions.Paper) {
        // if you are paper, they lose if they are rock, win if they are scissors
        return them == actions.Rock ? result.win : result.lose;
    } else if (you === actions.Rock) {
        // if you are rock, they lose if they are scissors, win if they are paper
        return them == actions.Scissors ? result.win : result.lose;
    } else if (you == actions.Scissors) {
        // if you are scissor, they lose if they are paper, win if they are rock
        return them == actions.Paper ? result.win : result.lose;
    }
    return null; // should be unreachable
}
const data = readData("./strategyGuide.txt")
    .split("\n")
    .filter((d) => !!d);
let sum = 0;
for (let game of data) {
    game = game.split(" ");

    const them = game[0];
    const me = game[1];

    const result = rockPaperScissors(
        yourMove[me].action,
        response[them].action
    );


    sum += resultVal[result] + yourMove[me].score;
    console.log(`me ${me}, them ${them}, result ${result}`);
    // if(sum > 100) break;
}

console.log(`sum: ${sum}`);
