const express = require("express");

const PORT = process.env.PORT || 3010;
const app = express();

//EXPRESS middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});