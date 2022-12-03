const fs = require('fs');

fs.readFile('Day03/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // part 1
    let parsedData = []
    data.split('\n').forEach(datum=> {
        let splitDatum = [datum.slice(0, datum.length / 2), datum.slice(datum.length/2, datum.length)];
        parsedData.push(splitDatum)
    })
    let repeated = []
    parsedData.forEach(datum=> {
        for (let i= 0; i< datum[0].length; i++) {
            for (let j= 0; j< datum[1].length; j++) {
                if (datum[0][i] === datum[1][j]) {
                    repeated.push(datum[0][i])
                    j += 1;
                    i += 1;
                }
            }
        }
    })
    console.log(repeated)
});