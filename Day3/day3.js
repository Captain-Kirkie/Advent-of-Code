const { readData } = require("../readData.js");

const data = readData("./contents.txt");

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

function findCommon(vals) {
    let map = new Map();
    for (const val of vals) {
        for (const i of val) {
            map.set(i, map.get(i) ?? 1);
        }
    }

    for (let [key, value] of map) {
        console.log(key + " = " + value);
        if (value >= vals.length) {
            return value;
        }
    }
}

const splitIntoGroupsof3 = (elvs) => {
    let i = 0;
    
    while(i < elvs.length) {
        if(i % 3 == 0) console.log(i);
    }

}
function part2() {
    const elvs = data.split("\n").filter((f) => !!f);
    let groups = [];
    for(let i = 0; i < elvs.length; i+=3) {
        let group = [];
        for(let j = i; j < i + 3; j++) {
            group.push(elvs[j]);
        }
        groups.push(group);;
    }
    console.log(groups);
}

const priority = makeAlphabetPriority();
// console.log(`part 1 ${part1()}`);

part2()
