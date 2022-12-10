const fs = require('fs');

fs.readFile('Day04/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // part 1
    parsedData = []
    data.split("\n").forEach((datum) => {
        parsedData.push(datum.split(","))
    })

    let overlap = 0;
    parsedData.forEach((datum)=>{
        let first = datum[0].split("-");
        let second = datum[1].split("-");
        if ((parseInt(first[0]) <= parseInt(second[0]) && parseInt(first[1]) >= parseInt(second[1])) ||
            (parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1]))
        ) {
            overlap += 1;
        }
    })

    console.log(overlap)

    // part 2

    let overlap2 = 0;
    parsedData.forEach((datum) => {
        let first = datum[0].split("-");
        let second = datum[1].split("-");
        if ((parseInt(first[0]) <= parseInt(second[0]) && parseInt(first[1]) >= parseInt(second[1])) ||
            (parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1])) ||
            (parseInt(first[1]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1])) ||
            (parseInt(first[0]) <= parseInt(second[1]) && parseInt(first[0]) >= parseInt(second[0]))
        ) {
            overlap2 += 1;
        }
    })
    console.log(overlap2)
})