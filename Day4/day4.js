const { readData } = require("../readData.js");

const data = readData("./inputDay4.txt");

function doesOverlap(elf1, elf2, func) {
    const pair1 = elf1.split("-").map((zone) => parseInt(zone));
    const pair2 = elf2.split("-").map((zone) => parseInt(zone));

    const larger =
        Math.abs(pair1[0] - pair1[1]) > Math.abs(pair2[0] - pair2[1])
            ? pair1
            : pair2;

    console.log(`larger is pair1 ${pair1}, ${pair1 === larger}`);

    const smaller = larger === pair1 ? pair2 : pair1;

    // bigger range smaller number < smaller range smaller number
    // && bigger range bigger number > smaller range bigger number
    return func(larger, smaller);
}

const overlapsFully = (larger, smaller) => {
    return (
        Math.min(larger[0], larger[1]) <= Math.min(smaller[0], smaller[1]) &&
        Math.max(larger[0], larger[1]) >= Math.max(smaller[0], smaller[1])
    );
};

const part1 = (data) => {
    data = data.split("\n").filter((d) => !!d);
    let count = 0;
    for (let line of data) {
        const pairs = line.split(",");
        const elf1 = pairs[0];
        const elf2 = pairs[1];
        if (doesOverlap(elf1, elf2, overlapsFully)) {
            count++;
        }
    }
    return count;
};

console.log(`count ${part1(data)}`);
