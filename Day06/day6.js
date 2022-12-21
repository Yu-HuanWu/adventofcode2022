const fs = require('fs');

fs.readFile('Day06/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // part 1
    let packet = []
    let answer = 0
    let endLoop = false
    data.split("").forEach((char, i) => {
        if (endLoop) {
            return;
        }
        if (packet.includes(char)) {
            packet = [char]
        } else {
            packet.push(char)
        }
        if (packet.length === 4) {
            answer = i +1;
            endLoop = true
        }
    })
    console.log(answer)

    // part 2
    // same as above, just change if (packet.length === 14)

})