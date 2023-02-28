const express = require("express");
const db = require('./db/connection'); // this is so we can use db here to activate the server in server.js
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
    res.status(404).end(); //this will show the localhost not found chrome message, stick to this for 404s
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//ADDITIONAL CODE
// Start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   });

