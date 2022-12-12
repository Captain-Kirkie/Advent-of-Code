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

const calculateMax = (data) => {
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

const calculateTopThree = (data) => {
    let elves = data.split(/\n\s*\n/);
    let calArr = [];
    for (let elf of elves) {
        let cals = elf.split("\n").map((c) => !!c && parseFloat(c));
        const sumCals = cals.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );
        calArr.push(sumCals);
    }
    calArr = calArr.sort((a, b) => {
        return b - a;
    });

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        console.log(`elf ${calArr[i]}`);
        sum += calArr[i];
    }
    return sum;
};

console.log(`Max elf calories ${calculateMax(data)}`);
console.log(`top 3 total is ${calculateTopThree(data)}`);
