function alphabetPoints(char){
    let alphabets= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i=0; i < alphabets.length; i++){
        if (char === alphabets[i]) {
            return i+1
        }
    }
}

const fs = require('fs');

fs.readFile('Day03/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // part 1
    let parsedData = []
    // data = "mjpsHcssDzLTzMsz"
    data.split('\n').forEach(datum=> {
        let splitDatum = [datum.slice(0, datum.length / 2), datum.slice(datum.length/2, datum.length)];
        parsedData.push(splitDatum)
    })
    let repeated = []
    for (let h= 0; h < parsedData.length; h++) {
        let keepGoing = true;
        for (let i = 0; i < parsedData[h][0].length; i++) {
            for (let j = 0; j < parsedData[h][1].length; j++) {
                if (!keepGoing) {
                    break
                }
                if (parsedData[h][0][i] === parsedData[h][1][j]) {
                    repeated.push(parsedData[h][0][i])
                    keepGoing= false;
                }
            }
        }
    }
    let points = 0
    repeated.forEach(char=> {
        points+= alphabetPoints(char)
    })
    console.log(points)

    // part2
    let triGroup = []
    let finalArr = []
    data.split('\n').forEach(datum=>{
        triGroup.push(datum)
        if (triGroup.length === 3) {
            finalArr.push(triGroup);
            triGroup = []
        }
    })
    let repeatedV2 = []
    for (let h = 0; h < finalArr.length; h++) {
        let keepGoing = true;
        for (let i = 0; i < finalArr[h][0].length; i++) {

            for (let j = 0; j < finalArr[h][1].length; j++) {

                for (let k = 0; k < finalArr[h][2].length; k++) {
                    if (!keepGoing) {
                        break
                    }
                    if (finalArr[h][0][i] === finalArr[h][1][j] && finalArr[h][1][j] === finalArr[h][2][k]) {
                        repeatedV2.push(finalArr[h][0][i])
                        keepGoing = false;
                    }
                }
            }
        }
    }
    let pointsV2 = 0
    repeatedV2.forEach(char => {
        pointsV2 += alphabetPoints(char)
    })
    console.log(pointsV2)
});