const fs = require('fs');

function shapePoints(shape) {
    switch (shape) {
        case 'X':
            return 1;
        case 'Y':
            return 2;
        case 'Z':
            return 3;
        case 'A':
            return 1;
        case 'B':
            return 2;
        case 'C':
            return 3;
        default:
            return 0;
    }
}

function winningPoints(array) {
    let you = array[0];
    let me = array[1];

    if ((you=== 'A' && me === 'X') || (you === 'B' && me === 'Y') || (you === 'C' && me === 'Z')) {
        return 3 // draw
    }

    // me lose
    if ((you==='A' && me ==='Z') || (you === 'B' && me === 'X') || (you==='C' && me === 'Y')) {
        return 0;
    }

    return 6
}

function resultPoints(shape) {
    switch (shape) {
        case 'X':
            return 0;
        case 'Y':
            return 3;
        case 'Z':
            return 6;
        default:
            return 0;
    }
}

function loseShape(you) {
    switch (you) {
        case 'A':
            return 'Z';
        case 'B':
            return 'X';
        case 'C':
            return 'Y';
        default:
            return 0;
    }
}

function winShape(you) {
    switch (you) {
        case 'A':
            return 'B';
        case 'B':
            return 'C';
        case 'C':
            return 'A';
        default:
            return 0;
    }
}

function shapePointsV2(array) {
    let you = array[0]
    let end = array[1]

    if (end === 'Y') {
        return shapePoints(you);
    }

    if (end === 'X') {
        return shapePoints(loseShape(you));
    }

    return shapePoints(winShape(you));
}

fs.readFile('Day02/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // part 1
    parsedData = []
    data.split("\n").forEach((datum)=>{
        parsedData.push(datum.split(" "))
    })
    points = 0
    parsedData.forEach((datum)=>{
        points += shapePoints(datum[1]);
        points += winningPoints(datum);
    })
    console.log(points)

    // part 2
    pointsV2 = 0;
    parsedData.forEach((datum) => {
        pointsV2 += resultPoints(datum[1])
        pointsV2 += shapePointsV2(datum)
    })

    console.log(pointsV2)
});