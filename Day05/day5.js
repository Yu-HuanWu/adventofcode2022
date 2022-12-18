const crate = [
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

    newParsedData=[]
    parsedData.forEach((parsedDatum)=> {
        temp = parsedDatum.split(" ");
        newParsedData.push([parseInt(temp[1]), parseInt(temp[3]), parseInt(temp[5])]);
    })

    // let crate1 = [...crate];
    // newParsedData.forEach((newParsedDatum)=> {
    //     for (let i=0; i< newParsedDatum[0]; i++) {
    //         crate1[newParsedDatum[2] - 1].push(crate1[newParsedDatum[1]-1].pop())
    //     }
    // })

    // let answer = [];
    // crate1.forEach((val) => {
    //     answer.push(val[val.length-1])
    // })
    // console.log(answer) // QNHWJVJZW

    // part 2
    let crate2 = crate;
    newParsedData.forEach((newParsedDatum) => {
        const movingCrate= []
        for (let i = 0; i < newParsedDatum[0]; i++) {
            movingCrate.push(crate2[newParsedDatum[1] - 1].pop())
        }
        crate2[newParsedDatum[2] - 1]= crate2[newParsedDatum[2] - 1].concat(movingCrate.reverse())
    })

    let answer2 = [];
    crate2.forEach((val) => {
        answer2.push(val[val.length - 1])
    })
    console.log(answer2) // BPCZJLFJW

})