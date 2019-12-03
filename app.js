const express = require('express');
const app = express();

let enemy = {
    "name": "orc",
    "health": 100,
    "attack": 25
}

app.get('/', (req, res) => {
    res.send('Hello Unity Developers!');
})

app.get('/enemy/orc', (req, res) => {
    res.send(enemy);
});

app.listen(3000, () => console.log('started and listening.'));

