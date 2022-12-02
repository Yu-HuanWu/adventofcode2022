const fs = require('fs');

fs.readFile('/Users/yu-huanwu/Desktop/adventofcode2022/Day1/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // part 1
    let biggestNum = 0
    data.split("\n\n").forEach((datum) => {
        let currNum = datum.split("\n").reduce((acc, val)=>{
            return parseInt(acc) + parseInt(val)
        },0)
        if (currNum > biggestNum) {
            biggestNum = currNum
        }
    });

    console.log(biggestNum)

    // part 2
    let array = []
    data.split("\n\n").forEach((datum) => {
        let currNum = datum.split("\n").reduce((acc, val) => {
            return parseInt(acc) + parseInt(val)
        }, 0)
        array.push(currNum)
    });
    console.log(array.sort((a,b) => {return b-a}).slice(0, 3).reduce((acc, val)=> {return acc+val}))
});