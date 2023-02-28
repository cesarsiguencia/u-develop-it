const mysql = require('mysql2'); //USE MYSQL2, not MYSQL, for this to work with the API routes

const db = mysql.createConnection({
    host:  "localhost",
    //your mysql username below is not "root"
    user: "root",
    //your mysql password belo
    password: "",
    database: "election"
},
console.log("Connected to the election database")
);

module.exports = db;