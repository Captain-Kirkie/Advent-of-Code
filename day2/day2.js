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

const data = readData("./strategyGuide.txt");
console.log(data);

const actions = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors",
};

const yourMove = {
    A: actions.Rock,
    B: actions.Paper,
    C: actions.Scissors,
};

const response = {
    X: actions.Rock,
    Y: actions.Paper,
    Z: actions.Scissors,
};
