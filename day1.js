const fs = require("fs");

function readData(path) {
    let data;
    try {
        data = fs.readFileSync(path, "utf8");
    } catch (err) {
        console.error(err);
    }
    return data;
}

const data = readData("./calories.txt");

const processElves = (data) => {
    let elves = data.split(/\n\s*\n/);
    let max = -1;
    for (let elf of elves) {
        let cals = elf.split("\n").map((c) => !!c && parseFloat(c));
        const sumCals = cals.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        if (sumCals > max) max = sumCals;
    }
    return max;
};
console.log(`Max elf calories ${processElves(data)}`);
