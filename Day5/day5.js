const { readData } = require("../readData");

const testPath = "./test.txt";
const inputPath = "./inputDay5.txt";

let data = readData(testPath).split("\n");
const directions = data.filter((d) => d.includes("move"));
const crates = data.filter((d) => {
    !!d && !d.includes("move");
});
console.log(crates);
// console.log(data);
