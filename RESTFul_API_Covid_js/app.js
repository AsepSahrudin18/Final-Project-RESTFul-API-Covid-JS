// import express

const express = require("express");


// membuat object
const app = express();

// menggunakan middleware
app.use(express.json());

// mendefinisikan route
const router = require("./routes/api.js");
app.use(router);

// definisikan port
app.listen(4000, ()=>{
    console.log("Server running at http://localhost:4000");
});