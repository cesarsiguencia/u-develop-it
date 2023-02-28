const express = require("express");

const db = require('./db/connection'); // this is all all the mysql commands can go  through

const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3010;
const app = express();

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

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });