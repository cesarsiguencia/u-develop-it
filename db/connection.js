const mysql = require('mysql2');

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

module.exports = db;