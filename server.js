const express = require("express");

const db = require('./db/connection'); // this is all all the mysql commands can go  through

const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3010;
const app = express();

//EXPRESS middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use api routes in folder
app.use('/api',apiRoutes)


app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
})


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})



//STARTING EXPRESS.js server through a port
// app.listen(PORT, () => { 
//     console.log(`Server running on port ${PORT}`);
// });

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });