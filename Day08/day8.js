const fs = require('fs');

function checkSurrounding(middle, left, right, top, bottom) {
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
            
        }
    }
    console.log(parsedData)
})