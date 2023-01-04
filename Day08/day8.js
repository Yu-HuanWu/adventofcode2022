const fs = require('fs');

fs.readFile('Day08/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    parsedData = [];
    data.split("\n").forEach((datum) => {
        let temp = [];
        datum.split("").forEach((num) => {
            temp.push(parseInt(num))
        })
        parsedData.push(temp)
    })
    console.log(parsedData)
})