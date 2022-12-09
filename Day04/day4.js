const fs = require('fs');

fs.readFile('Day04/input', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data)
})