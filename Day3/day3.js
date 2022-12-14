const { readData } = require("../readData.js");

const data = readData("./contents.txt");
// console.log(data);

const makeAlphabetPriority = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let alphabetMap = new Map();
    for (let i = 0; i < 26; i++) {
        alphabetMap.set(alphabet[i].toLowerCase(), i + 1);
    }
    for (let i = 0; i < 26; i++) {
        alphabetMap.set(alphabet[i], i + 1 + 26);
    }
    return alphabetMap;
};

function splitCompartments(ruckSack) {
    if (ruckSack.trim().length % 2 !== 0) throw "cant split"; // everything should be evein
    let middle = ruckSack.length / 2;
    return [ruckSack.substr(0, middle), ruckSack.substr(middle)];
}

function findInersecionNaive(a, b) {
    for (let char of a) {
        if (b.includes(char)) {
            return char;
        }
    }
    return null;
}

function part1() {
    const priority = makeAlphabetPriority();
    console.log(priority);
    const ruckSacks = data.split("\n").filter((f) => !!f);
    let sum = 0;
    for (let ruckSack of ruckSacks) {
        let sacks = splitCompartments(ruckSack);
        const sack1 = sacks[0];
        const sack2 = sacks[1];
        const result = findInersecionNaive(sack1, sack2);
        sum += priority.get(result);
    }
    return sum;
}

console.log(`part 1 ${part1()}`);
