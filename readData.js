const fs = require("fs");

const readData = function (path) {
    let data;
    try {
        data = fs.readFileSync(path, "utf8");
    } catch (err) {
        console.error(err);
    }
    return data;
};

module.exports = { readData };
