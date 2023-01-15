const fs = require('fs');

function checkSurrounding(middle, left, right, top, bottom) {
    if (left == undefined) { left = 0 }
    if (right == undefined) { right = 0 }
    if (top == undefined) { top = 0 }
    if (bottom == undefined) { bottom = 0 }
    if (left > middle && right > middle && top > middle && bottom > middle) {
        return true
    }
    return false
}

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

    for (let i = 0; i < parsedData.length; i ++) {
        for (let j = 0; j < parsedData[i].length; j++) {
            // check for the the whole row and column, all the way to edges
            let currTree = parsedData[i][j];
            
            checkSurrounding(parsedData[i][j], parsedData[i][j-1], parsedData[i][j+1], parsedData[i-1][j], parsedData[i+1][j])
        }
    }
    console.log(parsedData)
})