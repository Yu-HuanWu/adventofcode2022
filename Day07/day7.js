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

    let currDir;
    let prevDir = [];
    let allDir = {}
    parsedData.forEach((datum, i)=> {
        if (datum.includes("$ cd ")) {
            if (datum === "$ cd ..") {
                prevDir.pop();
                currDir = prevDir[prevDir.length-1]
            } else {
                newDir = datum.slice(5)
                currDir = newDir
                prevDir.push(newDir)
                if (!allDir[newDir]) {
                    allDir[newDir] = 0
                } else {
                    
                }
            }
        } else {

        }
    })
    console.log(currDir, prevDir, allDir)
})