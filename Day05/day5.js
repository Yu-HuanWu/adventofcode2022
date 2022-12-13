const fs = require('fs');

fs.readFile('Day05/input2', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data)
    parsedData=[];
    data.split("\n").forEach((datum) => {
        parsedData.push(datum)
    })

})