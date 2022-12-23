const fs = require('fs');

fs.readFile('Day07/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let dir = {}
    parsedData = [];
    data.split("\n").forEach((datum) => {
        parsedData.push(datum)
    })

})