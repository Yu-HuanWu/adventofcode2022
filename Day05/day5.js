let crate = [
    ['C', 'Z', 'N', 'B', 'M', 'W', 'Q', 'V'],
    ['H', 'Z', 'R', 'W', 'C', 'B'],
    ['F', 'Q', 'R', 'J'],
    ['Z', 'S', 'W', 'H', 'F', 'N', 'M', 'T'],
    ['G', 'F', 'W', 'L', 'N', 'Q', 'P'],
    ['L', 'P', 'W'],
    ['V', 'B', 'D', 'R', 'G', 'C', 'Q', 'J'],
    ['Z', 'Q', 'N', 'B', 'W'],
    ['H', 'L', 'F', 'C', 'G', 'T', 'J'],
]

const fs = require('fs');

fs.readFile('Day05/input2', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    parsedData=[];
    data.split("\n").forEach((datum) => {
        parsedData.push(datum)
    })

    // console.log(parsedData)

    newParsedData=[]
    parsedData.forEach((parsedDatum)=> {
        temp = parsedDatum.split(" ");
        newParsedData.push([temp[1], temp[3], temp[5]]);
    })
    console.log(newParsedData)
})