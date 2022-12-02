const fs = require('fs');

fs.readFile('/Users/yu-huanwu/Desktop/adventofcode2022/Day1/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});