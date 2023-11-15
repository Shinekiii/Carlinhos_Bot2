const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

let db = new sqlite3.Database('./points.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the points database.');
});

app.get('/points', (req, res) => {
    db.all('SELECT * FROM points', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
