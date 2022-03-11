const mysql = require('mysql2');

const express = require("express");

const inputCheck = require('./utils/inputCheck')

const PORT = process.env.PORT || 3010;
const app = express();

//EXPRESS middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// this code will connect us to the database
const db = mysql.createConnection({
    host:  "localhost",
    //your mysql username
    user: "root",
    //your mysql password
    password: "holes360",
    database: "election"
},
console.log("Connected to the election database")
);

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
})


app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;

    db.query(sql, (err, rows) => {
        if(err){
            res.status(500).json({ error: err.message })
            return;
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
})


//THIS QUERY COMMAND SHOWS US ALL CANDIDATES in the console.log
// db.query(`SELECT * FROM candidates` , (err, rows) => {
//     console.log(rows);
// })



app.get('/api/candidate/:id', (req, res) => {
    const sql = `SELECT * FROM candidates WHERE id = ?`; 
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if(err){
            res.status(400).json({ error: err.message })
            return;
        }
        res.json({
            message: 'success',
            data: row
        })
    })
}
)


// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row)
// })


app.delete('/api/candidate/:id', (req,res) => {
    const sql = `DELETE FROM candidates WHERE id = ?`;
    const params = [req.params.id]

    db.query(sql, params, (err, result) => {
        if(err){
            res.statusMessage(400).json({ error: res.message })
        } else if (!result.affectedRows){
            res.json({
                message: 'Candidate not found'
            })
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            })
        }
    })
})


// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// })


app.post('/api/candidate', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
    if(errors){
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
        VALUES (?,?,?)`;
    
    const params = [body.first_name, body.last_name, body.industry_connected];

    db.query(sql, params, (err, result) => {
        if(err){
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        })
    })
})

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//     VALUES (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// })



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})



//STARTING EXPRESS.js server through a port
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});