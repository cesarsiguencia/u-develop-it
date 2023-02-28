//REQUIRE PACKAGES, DATABASE, and the API ROUTES
const express = require("express");
const db = require('./db/connection'); 
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3010;
const app = express();

//Middleware and USE route naming
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api',apiRoutes)
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
})
app.use((req, res) => {
    res.status(404).end(); 
})

//Create connection to Database
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });