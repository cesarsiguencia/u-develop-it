const mysql = require('mysql2');

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