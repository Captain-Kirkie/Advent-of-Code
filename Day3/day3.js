const { readData } = require("../readData.js");

const data = readData("./contents.txt");
console.log(data);

const makeAlphabetPriority = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let alphabetMap = new Map();
    for(let i = 0; i < 26; i++) {
        alphabetMap.set(alphabet[i].toLowerCase(), i + 1)
    }
    for(let i = 0; i < 26; i++) {
        alphabetMap.set(alphabet[i], i + 1 + 26)
    }
    console.log(alphabetMap);
};
makeAlphabetPriority();

