const mysql = require('mysql2');

const express = require("express");

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


//THIS QUERY COMMAND SHOWS US ALL CANDIDATES
// db.query(`SELECT * FROM candidates` , (err, rows) => {
//     console.log(rows);
// })

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row)
// })

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// })

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